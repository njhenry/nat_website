[ -d "/home/nat/temp_data/website_shp_prep/" ] &&  rm -rf /home/nat/temp_data/website_shp_prep/;

mkdir /home/nat/temp_data/website_shp_prep/ && \
  cd /home/nat/temp_data/website_shp_prep/ && \
  wget https://www2.census.gov/geo/tiger/TIGER2019/UAC/tl_2019_us_uac10.zip && \
  unzip tl_2019_us_uac10.zip && \
  rm tl_2019_us_uac10.zip && \
  wget https://www2.census.gov/geo/tiger/TIGER2019/RAILS/tl_2019_us_rails.zip && \
  unzip tl_2019_us_rails.zip && \
  rm tl_2019_us_rails.zip;
