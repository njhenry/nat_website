---
layout: default
display: true

title: Guide | HTML, Wordpress, Flask, Jekyll
date: 2020-10-04
info: >-
  For the first post of this blog, I compare my experiences using four different 
  web frameworks to create a personal website.

thumb_img: false
thumb_alt: false
splash_img: false
splash_caption: >-
  Lorem ipsum

include_scripts: [
]

---


# HTML, Wordpress, Flask, Jekyll: adventures creating a personal website

For the first post on my revamped site, I'll talk about some of the different 
web frameworks I've explored while creating and revamping my personal website, 
their tradeoffs, and how I ended up with a site that had all the features I was 
looking for.

**This isn't a tutorial for using any particular framework or a full feature
comparison**, although I link to some resources below.  I'm hoping this will be a
useful guide for people with limited web development experience, as I did 
starting out, who want similar things out of their website.

That said, here are the features I was looking for:
- I wanted my **current website setup**, with a landing page, contact info, 
  biography, portfolio, and blog
- Within those sections, I wanted my portfolio and blog to be contained in 
  **separate "feeds"** with different formats. This is surprisingly difficult on
  some platforms, as I'll discuss below.
- I'm interested in web mapping, so I wanted to be able to **host interactive 
  visualizations** built in Javascript and embed them in my portfolio and blog 
  posts.
- A framework that was **straightforward to learn** and set up over the course 
  of a couple of weeks, given some prior (non-web) coding experience
- Easy to moderate and maintain
- Full control over website styling
- Easy to create drafts and preview changes to the website
- **Free** except for domain name and web hosting fees

Before I started designing my website, I had to register my domain name and  buy
web hosting. For people starting from scratch,
[here's](https://www.youtube.com/watch?v=BDdACdrs1vE)  a decent video primer on
how to get started. If you don't want to  buy your own web domain, you can also
host a page through [GitHub Pages](https://guides.github.com/features/pages/),
which will give you a domain in the format `mydomain.github.io`.

I built the first iteration of my website in 2016, using **Wordpress** for the
blog portion of my site and **base HTML/CSS/JS** for all other pages. In 2020, I
updated my site to its current format, which is based on the **Jekyll**
framework. I've also experimented with **Flask** as a web interface for a side
project written in Python. I discuss the  pros and cons of each of these options
in the following sections.


## Wordpress

If you're considering options for quickly and painlessly building a personal
website, Wordpress is probably near the top of your list. It's the premier  free
software for custom website building, with lots of features and extensive
tutorials and documentation online. There are also many ready-made
themes that you can adapt directly for your website:

<img 
  src='/assets/media/writing/web_frameworks/wordpress_themes.gif'
  alt='A selection of free themes featured on the Wordpress website'
  class='img-center'
/>

If you page through the [Wordpress themes page](https://wordpress.org/themes/),
you'll notice that most of these themes share a similar format: a landing page,
several top-level static pages, and then a regularly-updated stream of content
like a  blog or image reel.

If you're managing your website using
[cPanel](https://www.wpbeginner.com/glossary/cpanel/), you can install Wordpress
easily by searching for the "Wordpress Installer" link on your control panel. 
It's also fairly straightforward to [install Wordpress
manually](https://wordpress.org/support/article/how-to-install-wordpress/) using
an FTP  client like FileZilla. I haven't tried it personally, but it's
apparently possible to host a Wordpress-based blog on [GitHub
Pages](https://www.hywel.me/static/site/wordpress/2016/07/17/fast-free-static-website-with-wordpress-and-github-pages.html).

In the first iteration of my website, I installed Wordpress at 
`nathenry.com/writing` and used it to host my blog. After a few years of 
use and irregular updates, here are my takeaways:

#### Pros:

- Quick to learn: If you're already using cPanel, you can create a simple site
  from scratch and set up your theme within a couple of hours.
- Some of the classic features of blogs, like managing a comments section and 
  returning calendar views of posts, take dedicated thought in other frameworks
  but are trivial in WP.
- Easy to manage: The built-in admin dashboard gives you access to site themes,
  layout, plugins, and blog post drafts all in a single interface.

<a href='https://www.flickr.com/photos/lloyds-screenies/3331607370/in/photostream/'>
  <img
    src="/assets/media/writing/web_frameworks/wordpress_admin_interface.jpg"
    alt="The Wordpress admin dashboard. Shared from Flickr, licence CC-BY-2.0"
    class='img-center'
  />
</a>

In my opinion, if you find a Wordpress theme that closely matches your ideal 
site layout, AND you don't need to add any custom features that don't already
exist as [plugins](https://wordpress.org/plugins/), just go for Wordpress.

#### Cons:

- No custom visualizations: If there's a straightforward way to include your own
  interactive Javascript on Wordpress sites without creating a plugin, I haven't 
  found it yet. From the start, this meant that I would not be able to embed 
  custom interactive visualizations on my posts, and at least part of my site 
  would have to be built outside of the Wordpress framework.
- Two logins: The admin login for your Wordpress site is separate from the cPanel 
  dashboard, requiring two sets of login credentials. I found this annoying when 
  I was regularly switching back and forth between my cPanel and WP admin pages.
- Requires maintenance: I left my site alone for six months only to come back and
  find that I needed to update my WP version to fix a back-end security 
  vulnerability.
- Default of one feed: I wanted two separate feeds for my portfolio and blog 
  posts, which would be presented differently and listed on separate pages. This
  deviated from the default Wordpress style, which uses a single feed for all 
  blog posts, although filtering by tag or post type is straightforward. I
  struggled with possible ways to get these two separate feeds, including running
  two separate Wordpress installs on my site at one point! Ultimately, I just 
  kept my portfolio in base HTML until eventually switching my whole site to
  Jekyll. This gets to a larger point---
- Adding new features to your site beyond the existing plugin ecosystem 
  can be difficult, and requires intermediate knowledge of PHP as well as the 
  underlying Wordpress framework.

As a novice, there might be easier ways to customize WP that I've missed---but 
given the limitations I mentioned, it was clear to me that at least part of my
site needed to be separate from Wordpress. So, why not build things up using the
basics?


## HTML / CSS / Javascript

These three languages are the bedrock of the internet: HTML (**H**yper**T**ext
**M**arkup **L**anguage) defines the structure of a web page, CSS (**C**ascading
**S**tyle **S**heets) defines the style, and JS (**J**ava**S**cript, unrelated 
to the programming language Java) alters the page structure, allowing for 
interactive features. While Wordpress does all of the heavy lifting for you but 
limits the tools available, building your website using HTML/CSS/JS leaves room 
for infinite customization---as long as you don't mind building everything from
scratch.

There's not much for me to say about these, except to share my opinion that
Javascript is actually a decent introduction to programming because it can be 
run locally on your browser without any extra setup. I learned basic
[HTML](https://www.w3schools.com/html/default.asp), 
[CSS](https://www.w3schools.com/css/default.asp), and 
[Javascript](https://www.w3schools.com/js/default.asp) from w3schools,
which has a nice free learning platform with interactive tutorials.

#### Pros:

- Before building up a more complicated site using frameworks like Flask and
  Jekyll, it's nice to understand the Document Object Model (DOM) of websites 
  and to develop a basic website theme that you're happy with using just HTML 
  and CSS
- When you're online, you can grab inspiration from other sites by 
  right-clicking and choosing to Inspect Element. Some sites are a confusing
  jumble of `<div>`s, but others use creative styling techniques that you can
  apply to your own site. You can also look to website designs [stored on 
  GitHub](https://github.com/topics/website-template) for inspiration.

#### Cons:

- When building a static site with many pages from scratch, you quickly run into 
  the issue of **repetition**. There isn't a good way to define code blocks for 
  headers and footers that can be reused across pages, so updating those 
  sections requires copy-pasting the same HTML code blocks across dozens of 
  files.
- Base CSS is powerful, but it's not designed to handle advanced variable 
  manipulation. Extensions like [SASS](https://sass-lang.com/) offer more 
  flexibility for dynamically setting the style of each page.
- Writing blog posts in base HTML can be slow---it's harder to review and revise 
  text that is broken up by HTML tags. If you're planning on updating your 
  website regularly, writing in plain text or 
  [Markdown](https://www.markdownguide.org/) feels more natural.
- Javascript is powerful and near-infinitely extensible, but it opens up [security 
  risks](https://blog.bitsrc.io/javascript-security-issues-and-best-practices-37e78df4dce4),
  particularly once you start allowing users to enter text on your site. This is
  less of a problem for static sites (sites without any back-end databases to 
  store or return data from users).

In short, basic HTML / CSS / Javascript might be enough to build a small static 
website, but if you want to add new content regularly, you probably want to 
upgrade to a purpose-made web framework. I discuss two of those frameworks, 
Jekyll and Flask, below.


## Jekyll

[Jekyll](https://jekyllrb.com/) is a framework for building static sites using
content templating. Jekyll mainly solves the issue of duplication:
- It uses the [**Liquid**](https://shopify.github.io/liquid/) library to 
  generate HTML templates that vary based on site- and page-specific settings
- It allows for blocks of code such as a page header to be written once, then
  included across many pages
- Content can be written in HTML or 
  [Markdown](https://www.markdownguide.org/) language

While Jekyll is written in Ruby, it doesn't require any Ruby-specific expertise: 
I have only ever had to parse very simple Ruby loops in Liquid and to run a 
simple set of commands to build and serve my sites.


### Liquid Gold

Here's a quick example showing why Liquid is such a powerful tool for templating
your web page. On my original portfolio page, written directly in HTML, I would
have to manually write out separate sections linking to each post:

```
<div class="posts">
  <!-- Post 1 -->
  <a href="/link/to/post/a.html" class="post-excerpt">
    <div class="padded-content">
      <div class="title">My first post</div>
      <div class="image" style="background-image:url('/link/to/image/a.png')"></div>
    </div>
  </a>

  <!-- Post 2 -->
  <a href="/link/to/post/b.html" class="post-excerpt">
    <div class="padded-content">
      <div class="title">My second post</div>
      <div class="image" style="background-image:url('/link/to/image/b.png')"></div>
    </div>
  </a>

  <!-- repeat for the next 99 posts... -->
</div>
```

You can see how this would get tiresome. The portfolio page would also have to 
be updated manually each time I created a new entry. With Jekyll, information 
about each post is automatically stored in an object called `site.portfolio`, 
which we can easily iterate through. Note the Liquid syntax included, using the
`{% raw %}{{ object }}{% endraw %}` and `{% raw %}{% logic %}{% endraw %}` tags:

```
{% raw %}<div class="posts">
  <!-- the for-loop below is using Liquid syntax -->
  {% for this_post in site.portfolio %}
    <a href="{{ this_post.url }}" class="post-excerpt">
      <div class="padded-content">
        <div class="title">{{ this_post.title }}</div>
        <div class="image" style="background-image:url('{{ this_post.splash_img }}')"></div>
      </div>
    </a>
  {% endfor %}
</div>{% endraw %}
```

Not only is this version more concise, it will automatically update when I 
create a new portfolio post and then rebuild the site. I can use if-else logic 
to vary the format of my posts based on the post settings, and so on.

Specifics aside, here's my take on Jekyll as a tool for building your website:

#### Pros

- Ability to draft posts in both Markdown and HTML
- Full control over style, can include Javascript visualizations on any page
- Templating with Liquid reduces my overhead and allows me to focus on content
- No issues with adding Javascript visualizations
- Free software, allows me to host the code for generating the site on GitHub
- Although Jekyll is written in Ruby, you only need to interact with Ruby when
  first setting up your environment and when working with fairly straightforward
  Liquid templates.
- The Jekyll website's [tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/)
  offers a step-by-step overview showing how to launch your own site
- Although Jekyll initializes with a default CSS style template, I was able to 
  easily update to my previous website style. There are plenty of starter themes
  to choose from on the [Jekyll website](https://jamstackthemes.dev/ssg/jekyll/), 
  and you can also draw inspiration from an impressive variety of professional
  sites on their [showcase page](https://jekyllrb.com/showcase/):

<img
  src="/assets/media/writing/web_frameworks/jekyll_showcase.png"
  alt="Screenshot from the Jekyll showcase web page, showing four example sites"
  class='img-center'
/>


#### Cons

- Unlike a CMS, Jekyll does not allow me to preview my code online before 
  launching. I can, however, preview by running a local server for my website
  using the command `bundle exec jekyll serve`.
- This framework was straightforward to learn given previous knowledge of HTML 
  and CSS; however, if you are starting from scratch, it may be less intuitive.
- I haven't yet found comprehensive documentation on how Liquid handles Markdown 
  through the `markdownify` command---be prepared to do your own searching for 
  particular edge cases.

As someone who wants a lot of flexibility in my site layout and design, Jekyll
is my favorite site creation framework so far. That said, at the end of the day,
all I want is a static blog. For people with more ambitious plans, I'll 
introduce Flask, a Python-based framework for serving web content.


## Flask

[Flask](https://flask.palletsprojects.com/en/1.1.x/) is a framework for serving
web applications, written in Python. There are some surface similarities to
Jekyll: Flask relies on the templating library 
[Jinja2](https://jinja.palletsprojects.com/en/2.11.x/), which [performs a 
function to Liquid](https://medium.com/@i5ar/template-languages-a7b362971cbc) 
and uses similar `{% raw %}{{ object }}{% endraw %}` and  `{% raw %}{% logic
%}{% endraw %}` blocks to create HTML templates. The fundamental difference
between the two is that Jekyll generates a set of static pages to upload to a
site, while Flask dynamically serves content. This makes Flask a useful
framework for building web services like APIs.

I also found the experience of building sites using Flask and Jekyll very 
different. While Jekyll requires just enough understanding of Ruby to make 
templating logic work, Flask websites can be built and served entirely in 
Python. You can see the difference for yourself by comparing the code underlying
my [Jekyll](https://github.com/njhenry/nat_website) and 
[Flask](https://github.com/GISforHealth/batch_geocode/tree/master/app) projects. 

#### Pros

- Flask bills itself as a 'microframework', meaning that it is little 
  unnecessary overhead and it's easy to integrate with many other Python web 
  libraries. I like using it alongside
  [WTForms](https://wtforms.readthedocs.io/en/2.3.x/), a more intuitive way to 
  build web forms and retrieve user input.
- The [Flask 
  mega-tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) 
  is one of the most comprehensive introductions I've found to any web 
  development framework.


#### Cons

- This option requires deploying a Python application on your web host, which
  probably makes it best suited to people with existing Python and web 
  development experience. This also makes it incompatible with GitHub Pages.
- Homemade web applications in Flask are more vulnerable to [web security 
  threats](https://flask.palletsprojects.com/en/1.1.x/security/) than static 
  sites or prebuilt software like Wordpress.

If you're just trying to create a blog, Flask is probably overkill. On the other
hand, it opens up the possibility to build all sorts of web services that are 
impossible on a static site, including many [Flask-powered
applications](https://github.com/rochacbruno/flask-powered) that you've probably
interacted with before. And for people who prefer to write everything in Python,
it's a way to get a site off the ground with minimal HTML / CSS knowledge.


## Takeaways

Here's a quick review of the four frameworks I've explored for a personal site:

1. **Wordpress**: Fast setup, good option for blogs. Make sure that all your 
needs are covered by existing plugins.

2. **HTML + CSS + Javascript**: Decent option for sites with only a few pages.
If you're working with anything other than a premade template, you'll want to
learn at  least the basics of HTML and CSS.

3. **Jekyll**: Best option for static blogs if you want full control over the 
styling and the option to add your own scripts. All about templating. Requires 
only minimal Ruby knowledge to get started.

4. **Flask**: Framework for building a variety of web applications. Best option
if you need to serve content dynamically. Requires some comfort working with
Python in addition to HTML + CSS.

This guide only reviews the frameworks that I've personally worked with---
Wordpress, Jekyll, and Flask all have competitors trying to fill the same niche.
I hope this guide can serve as a starting point for exploring which options fit
your site's needs.

*Like this tutorial or have suggestions? [Let me know](/contact.html)!*
