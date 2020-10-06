---
layout: default
display: true

title: Adding custom Javascript to Jekyll posts
date: 2020-10-05
info: >-
  How to add interactive visualizations written in Javascript to Jekyll blog 
  posts

thumb_img: false
thumb_alt: false
splash_img: false
splash_caption: >-
  Lorem ipsum

include_scripts: [
  "https://d3js.org/d3.v6.min.js",
  "/assets/js/writing/scripts_jekyll/simple_d3_viz.js"
]

---


# Adding custom Javascript to Jekyll posts

One of the useful features of Jekyll is that content can be written either in
plain HTML or in the Markdown language. However, Jekyll adds markdown content
to web pages using the Liquid `markdownify` command, which strips Javascript. 
To get around this, I set up a simple system for including scripts along with 
Markdown content.

This setup is inspired by a similar 
[post](http://blog.emmatosch.com/2016/03/09/using-custom-javascript-in-jekyll-blogs.html) 
written by Emma Tosch. While our solutions are similar, my solution is more 
concise and allows me to source any number of scripts hosted anywhere on the web.

### Change 1: Front Matter

A feature of Jekyll is that each page can include [front 
matter](https://jekyllrb.com/docs/front-matter/), which contains a list of 
page-specific attributes in YAML format. These attributes can be used to control 
logic on the page or elsewhere. In the header of each post, I add an 
`include_scripts` attribute listing Javascript files to be sourced on the page. 
Here are some relevant attributes in this post's front matter:

```
title: Adding custom Javascript to Jekyll posts
date: 2020-10-05
include_scripts: [
  "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",
  "https://d3js.org/d3.v5.min.js",
  "/assets/js/writing/scripts_jekyll/simple_d3_viz.js"
]
```

For this page, I created a visualization, `simple_d3_viz.js`, that relies on 
the external jQuery and D3 libraries.

### Change 2: Layout

I then include the following section at the bottom of the `<body>` section in my
default page template, located in `_layouts/default.html`:

```
{% raw %}{% if page.include_scripts %}
  {% for include_script in page.include_scripts %}
    <script type='text/javascript' src='{{ include_script }}'></script>
  {% endfor %}
{% endif %}{% endraw %}
```

This sources each script listed in `include_scripts` in the front matter of a 
particular post. If the `include_scripts` attribute is not defined for a post, 
then the if-statement returns false and no scripts are sourced. You can see the
full template for my posts [on 
GitHub](https://github.com/njhenry/nat_website/blob/public/_layouts/default.html).

### Change 3: Add a div

Most Javascript visualizations target an existing div on a web page, so for the 
final step, use the `<div>` HTML tag to create a div with a unique ID. HTML tags
are intepreted correctly in both HTML and Markdown posts. Here is the div I
define below on this page:

```
<div 
  id='add-viz'
  style='height:500px; width:100%; border:1px solid gray;'
>
</div>
```

The script `simple_d3_viz.js` then targets this div using the `add-viz` ID.

Using these three components, I created a simple visualization on this page: a
force-directed network of urban areas in the Western US, which also show up on 
my [landing page](/index.html). This visualization was inspired by the [graph of
_Les Misérables_ characters](https://observablehq.com/@d3/force-directed-graph) 
created by Mike Bostock.

<div 
  id='add-viz'
  style='height:500px; width:100%; border:1px solid gray;'
>
</div>

I hope this tutorial gives you the tools to add custom Javascript to your own 
Jekyll pages. Go forth and visualize!

<hr />

*Like this tutorial or have suggestions? [Let me know](/contact.html)!*
