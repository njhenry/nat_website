/* 
------------------------------------------------------------------------------->

TITLE: Generate visualization of Trump property patrons
AUTHOR: Nathaniel Henry, github: njhenry
CREATED: 13 October 2020

DESCRIPTION: This script creates a D3 hierarchical force-directed diagram based
  on data of Trump property patrons, 2016-present.

  This script relies on the following external libraries:
   - jQuery: https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
   - D3 v5: https://d3js.org/d3.v5.min.js

  The other dependency is a data-loading script, 'viz_load_data.js', generated 
  by scripts in the 'prepare_data/' folder of this repository. This script uses
  an object defined in 'viz_load_data.js':
   - `patrons_tree`: Hierarchy of patrons by Trump property. Must be in a format
      that can be parsed by `d3.hierarchy()`

NOTE: This repository is intended for personal use only. Before running this
  script, check that your intended use aligns with the NYT terms of service:
  https://help.nytimes.com/hc/en-us/articles/115014893428-Terms-of-service

-------------------------------------------------------------------------------> 
*/

// Setup ---------------------------------------------------------------------->

// Identify the div to be filled and create an SVG within it
const div_id = '#hierarchy-chart';
const div_height = d3.select(div_id).node().getBoundingClientRect().height,
      div_width = d3.select(div_id).node().getBoundingClientRect().width;
const svg = d3.select(div_id)
  .append('svg:svg')
    .attr('height', div_height)
    .attr('width', div_width);

// Set time for all transitions, in milliseconds
const transition_time = 300;

// Define a tooltip that will appear when mousing over a point
var tooltip = d3.select(div_id)
  .append("div")
  .attr('class','tooltip')
    .style('position', 'absolute')
    .style('font', '12px sans-serif')
    .style('line-height', 1.5)
    .style('background', '#ddd')
    .style('padding', '5px')
    .style('padding-bottom', '10px')
    .style('border', '0px')
    .style('border-radius', '8px')
    .style('opacity', 0.);

// Function to define "opening" the tooltip
function open_tooltip(d){
  // Set up x marker (to indicate that the tooltip can be closed by clicking)
  const x_style = "style='padding:0; margin:0 0 -5px 0; text-align:right; font:3px;'";
  var inner_html = "<div " + x_style + ">x</div>";
  // Set up styling for any titles
  const h3_style = "style='text-align:center; margin:0 0 5px 0; padding:0;'";

  // Add different inner HTML depending on the contents of the data
  if(d.data.type == 'Parent Node'){
    inner_html += "<h3 " + h3_style + ">" + d.data.display_name + "</h3>";
  } else if (d.data.type == 'Trump Property'){
    inner_html += "<h3 " + h3_style + ">Trump Property:<br>" +
                  d.data.display_name + "</h3>";
  } else {
    if (d.data.display_name != ''){
      inner_html += "<h3 " + h3_style + ">" + d.data.display_name + "</h3>";
    }
    for(const d_key in d.data){
      if((d_key != 'name') & (d_key != 'children') & (d_key != 'display_name')){
        inner_html += "<i>" + d_key + "</i> - " + d.data[d_key] + "<br/>";
      }
    }        
  }
  if(d.data.children){
    tooltip.style('text-align', 'center');
  } else {
    tooltip.style('text-align', 'left');
  };
  tooltip
    .html(inner_html)
    .style('left', (d3.event.pageX) + 'px')
    .style('top', (d3.event.pageY) + 'px')
    .transition(transition_time)
      .style('opacity', 0.9);
}

// Function to define "closing" the tooltip
tooltip.on('click', function(d){
  tooltip.style('opacity', 0.0);
  tooltip.html('');
});


// Create the force-directed diagram ------------------------------------------>

// Define data structure
const root = d3.hierarchy(patrons_tree);
var links = root.links();
var nodes = root.descendants();

// Set color scheme by patron type
// Color scheme inspired by Color Brewer: https://colorbrewer2.org/
const patron_type = [
  'Advocacy Group',
  'Charity',
  'Religious Org',
  'Business',
  'Trade Association',
  'Foreign-Biz',
  'Foreign-Gov',
  'Foreign-Other',
  'Unknown'
];
const patron_colors = [
  '#e41a1c', // Advocacy Group
  '#377eb8', // Charity
  '#ff7f00', // Religious Org
  '#60bb5d', // Business
  '#2f6c2d', // Trade Association
  '#c698cd', // Foreign-Biz
  '#984ea3', // Foreign-Gov
  '#502956', // Foreign-Other
  '#787878'  // Unknown
];
const col_scale = d3.scaleOrdinal(patron_colors).domain(patron_type);

// Define the force-directed diagram
const simulation = d3.forceSimulation(nodes)
  .force("charge", d3.forceManyBody().strength(-80))
  .force(
    "link",
    d3.forceLink(links)
      .id(d => d.index)
      .strength(d => (d.source.children & d.target.children) ? .2 : .5 )
    )
  .force("center", d3.forceCenter(div_width / 2 + 30, div_height / 2 + 30))
  .force("x", d3.forceX())
  .force("y", d3.forceY());

// Set the behavior for dragging a node
function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.5).restart();
  d.fx = d.x;
  d.fy = d.y;
}
function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}
function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

// Visualize links between nodes
const link = svg.append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
  .selectAll("line")
    .data(links)
    .join("line");

// Visualize nodes as circles
const node = svg.append("g")
    .attr('class', 'node-point')
    .attr("stroke-width", 1.)
  .selectAll("circle")
  .data(nodes)
  .join("circle")
    .attr("stroke", d => d.children ? '#000' : '#AAA')
    .attr("fill", d => 
      (d.data.type == 'Parent Node') ? '#000' :
      (d.data.type == 'Trump Property') ? '#fff' :
      col_scale(d.data.type)
    )
    .attr("r", d => 
      (d.data.type == 'Parent Node') ? 15 :
      (d.data.type == 'Trump Property') ? 10 :
      5
    )
    .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended))
    .on('click', d => open_tooltip(d));

var node_label = svg
  .append('g')
    .attr('class', 'node-label')
  .selectAll('text')
  .data(nodes)
  .join('text')
    .text(d => d.data.children ? d.data.display_name_short : null)
    .attr('x', d => (d.data.type == 'Parent Node') ? d.x + 8 : d.x + 5)
    .attr('y', d => (d.data.type == 'Parent Node') ? d.y - 15 : d.y - 10)
    .style('font', '10px sans-serif')
    .style('fill', '#555')
    .style('pointer-events', 'none');

// Update points over time
simulation.on("tick", () => {
  link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

  node
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);

  node_label
    .attr('x', d => (d.data.type == 'Parent Node') ? d.x + 8 : d.x + 5)
    .attr('y', d => (d.data.type == 'Parent Node') ? d.y - 15 : d.y - 10);
});


// Add legend and highlighting buttons ---------------------------------------->

// Function to reduce the opacity of all patron nodes where a particular 
//  condition is false
function focus_grouping(group_name){
  node
    .transition(transition_time)
    .style('opacity', d =>
      d.data.children ? 1.0 :
      d.data[group_name] ? 1.0 : 0.2
    );
}
// Function to only show named entities in the NYT article
function focus_named(){
  node
    .transition(transition_time)
    .style('opacity', d => 
      (d.data.display_name == "") ? 0.2 : 1.0
    );
}


// Create div that will store the legend and focus buttons
var viz_guide = d3.select(div_id)
  .append('div')
    .style('position', 'absolute')
    .style('top', '10px')
    .style('left', '10px')
    .style('margin', 0)
    .style('padding', '5px')
    .style('background', 'white')
    .style('opacity', 0.85);

// Add legend
const legend_font_style = '10px sans-serif';

var legend = viz_guide
  .append('svg:svg')
    .style('margin', 0)
    .style('height', '160px')
    .style('width', '110px')
    .style('padding', 0);
legend.selectAll('legend_dots')
  .data(patron_type)
  .enter()
  .append('circle')
    .attr('cx', 10)
    .attr('cy', function(d, i){ return(10 + i * 18) })
    .attr('r', 5)
    .style('fill', d => col_scale(d));
legend.selectAll('legend_labels')
  .data(patron_type)
  .enter()
  .append('text')
    .attr('x', 20)
    .attr('y', function(d, i){ return(14 + i * 18) })
    .style('fill', d => col_scale(d) )
    .style('font', legend_font_style)
    .text(d => d)
    .attr('text-anchor', 'left')
    .style('alignment-baseline', 'middle');

// Add focus buttons
var focus_buttons = viz_guide
  .append('div')
    .style('font', legend_font_style)
    .style('text-align', 'center')
focus_buttons.append('h3')
  .style('margin', '10px 0 5px 0')
  .html('Focus on:')

function add_focus_button(button_title, focus_func){
  focus_buttons
    .append('button')
    .style('font', legend_font_style)
    .style('width', '120px')
    .style('padding', '0px')
    .html(button_title)
    .on('click', () => focus_func());
  focus_buttons.append('br');
}

add_focus_button('Named in dataset', focus_named);
add_focus_button('Trump property members', () => focus_grouping('isMember'));
add_focus_button(
  'NYT focus: spent $12M in first 2 years',
  () => focus_grouping('paidFirstTwoYears')
);
add_focus_button('Brian Ballard clients', () => focus_grouping('isBallardClient'));
add_focus_button(
  '<i>Clear focus</i>',
  () => node.transition(transition_time).style('opacity', 1.)
);

// Add a link returning to the analysis web page
var article_link = viz_guide
  .append('h3')
    .style('font', legend_font_style)
    .style('font-weight', 'bold')
    .append('a')
      .attr('href','/writing/2020-10-14-trump_property_patrons.html')
      .html('< Read the Analysis')
