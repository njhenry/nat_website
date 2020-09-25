## #############################################################################
## 
## PREPARE SPATIAL DATA FOR FRONT PAGE
## 
## Author: Nat Henry, @njhenry
## Created: September 23, 2020
## Purpose: Pre-process spatial data for website landing page
## 
## #############################################################################

rm(list=ls())
library(data.table)
library(geojsonsf)
library(ggplot2)
library(glue)
library(jsonlite)
library(sf)

## Settings
# Working directory (where shapefiles have been downloaded using shell script)
in_dir <- '/home/nat/temp_data/website_shp_prep/'
# File names of shapefiles (also downloaded using shell script)
shp_fps <- list(cities = 'tl_2019_us_uac10.shp', lines = 'tl_2019_us_rails.shp')
# Repository directory (for output data)
repo_dir <- '~/Documents/repos/nat_website/'
# Coordinate reference system to project to
# Currently set as UTM 11N (Western US projection)
crs_def <- '+proj=utm +zone=11 +datum=WGS84 +units=m +no_defs +ellps=WGS84 +towgs84=0,0,0'
# Bounding box dimensions (in projected units)
bbox <- list(xmin=-5E5, ymin=3.3E6, xmax=1.15E6, ymax=5.5E6)
# Minimum area to keep for a city
min_area_sqm <- 7E6


## Load, project, and crop shapefile
shps <- lapply(shp_fps, function(fp){
  shp <- sf::st_read(file.path(in_dir, fp))
  shp <- sf::st_transform(shp, crs = sf::st_crs(crs_def))
  shp[, c('long','lat')] <- sf::st_coordinates(sf::st_centroid(shp))
  shp <- shp[shp$long > bbox$xmin & shp$long < bbox$xmax & 
               shp$lat > bbox$ymin & shp$lat < bbox$ymax, ]
  return(shp)
})
names(shps) <- names(shp_fps)
cities <- shps$cities[shps$cities$ALAND10 > min_area_sqm, ]
rails <- shps$lines

# Simplify rails object
rails_simple <- sf::st_simplify(rails, dTolerance = 2E3)
rails_simple <- rails_simple %>% 
  group_by(FULLNAME) %>% 
  summarize(dummy=first(FULLNAME)) %>% 
  st_cast

## Keep only centroids of urban areas
city_dt <- na.omit(data.table(
  name = as.character(cities$NAME10), long = cities$long, lat = cities$lat,
  type = as.character(cities$UATYP10), area = cities$ALAND10
))
city_dt[, `:=` (
  idx = .I, urban_area = as.integer(type=='C'), cj = 1
)]
# Higher weight for urban areas vs "urban clusters"
city_dt[, weight := log(area) * (2 + urban_area)]
city_dt[, weight_rank := frank(weight) ]
city_dt[, weight_viz := area * (1 + 3 * urban_area)]
city_dt[, state := substr(name, nchar(name)-1, nchar(name))]


## Create links
links <- merge(
  city_dt, city_dt, by='cj',
  allow.cartesian = TRUE, suffixes = c('_a','_b')
)[idx_a < idx_b, ]
# Create a simple model for "gravity" between two places
links[, dist := sqrt((long_b - long_a)**2 + (lat_b - lat_a)**2)]
links <- links[
  , r_dist_a := frank(dist), by=idx_a
  ][, r_dist_b := frank(dist), by=idx_b
  ][(r_dist_a < 10) | (r_dist_b < 10) | (weight_rank_a < 10 & weight_rank_b < 10), 
  ][, c('r_dist_a','r_dist_b') := NULL ]
links[, same_state := as.numeric(state_a==state_b) ]
links[, force := log(weight_a * weight_b/dist**2)]
links[, force := force + min(force) ]
links[
  ( weight_rank_a > 20 | weight_rank_b > 20 ) & same_state == 0,
  force := force * 2 / 3
  ]
# Truncate the top bit
top_half_pct <- quantile(links$force, .995)
links[ force > top_half_pct, force := top_half_pct ]
# Exclude any links outside of the top 10 IF they are not the top link for any city
links[, rank_a := frank(force), by = idx_a ]
links[, rank_b := frank(force), by = idx_b ]
links[, rank_all := frank(force) ]
links_sub <- links[ rank_a == 1 | rank_b == 1 | rank_all < 200, ]


## Visualize
fig <- ggplot() + 
  geom_sf(data=rails_simple) + 
  geom_segment(
    data=links_sub,
    aes(x=long_a, y=lat_a, xend=long_b, yend=lat_b),
    alpha=.25
  ) +
  geom_point(data=city_dt, aes(x=long, y=lat, size=weight_viz), alpha=.5, color='blue') + 
  theme_minimal()
plot(fig)


# Format data for output
cities_output <- list(
  nodes = city_dt[, c('idx','name','long','lat','state','weight_viz'), with=F],
  links = links_sub[, c('to','from','force'), with=F]
)

# Save out
out_dir <- file.path(repo_dir, 'assets/media/landing_page')
if(!dir.exists(out_dir)) stop("Issue - out directory does not exist.")

cities_json <- jsonlite::toJSON(x=cities_output)
write(cities_json, file=file.path(out_dir, 'wc_cities.json'))

rails_json <- geojsonsf::sf_geojson(rails_simple)
write(rails_json, file=file.path(out_dir, 'wc_rails.json'))
