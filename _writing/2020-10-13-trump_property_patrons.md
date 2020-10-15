---
layout: default
display: true

title: "Analysis: The President's Patrons"
date: 2020-10-13
info: >-
  I describe the dataset underlying a New York Times report on interest group
  spending at Trump Organization properties.

thumb_img: false
thumb_alt: ""
splash_img: false
splash_caption: >-
  Lorem ipsum

include_scripts: []

---

# The President's Patrons

Last Saturday, the New York Times released a new chapter in its [ongoing
investigation of President Trump's
finances](https://www.nytimes.com/2020/09/27/us/trump-taxes-editors-note.html).
The story, titled "[Trump's Swamp: Taxes Trace Payments to Properties by Those
Who Got
Ahead](https://www.nytimes.com/interactive/2020/10/10/us/trump-properties-swamp.html),"
details how organizations with a direct financial interest in federal government
policy have spent lavishly at Trump Organization properties since 2017.

The report's 13-person byline and references to nearly 250 interviewees both
hint at a blockbuster investigation of politically-motivated spending. An
animated network diagram in the online articles adds to the sense of scale: as
you scroll down, the diagram highlights hundreds of dots, each one representing
an interest group who spent money at a Trump property.

<p class='caption'>
  <img
    src='/assets/media/writing/trump_property_patrons/nyt_screenshot_dots.png'
    alt='The network of Trump property patrons, as visualized by the New York Times'
    class='img-center bordered'
  />
  The network of Trump property patrons, as visualized by the New York Times
  <a href='https://www.nytimes.com/interactive/2020/10/10/us/trump-properties-swamp.html'>
    report
  </a>
</p>

Compared to the promised scope of this investigation, I found the Times report
to be frustratingly anecdotal. Most of the narrative focuses on particular
individuals and organizations who spent large sums of money at Trump properties,
then lobbied the president to adopt policies in their favor. While these stories
are important and concerning, they describe only a small fraction of the parties
covered by the investigation. Without descriptive statistics to characterize
spending and influence across all interest groups, and with the network diagram
only ever naming a few organizations at a time, it's hard to determine how
representative those narratives are across President Trump's wider patronage
network.

To understand the web of politically-motivated spending at Trump properties, I
pulled the patronage dataset underlying the Times report's web visualization.
The dataset identifies new spenders and connections that were not reported in 
the original Times article. I have also analyzed the data and created an
interactive visualization to get a broader perspective on interest group
spending.


## A dataset of patrons

I copied the Javascript data underlying the scrolling visualization for "[The
Swamp That Trump
Built](https://www.nytimes.com/interactive/2020/10/10/us/trump-properties-swamp.html),"
which is currently available to the public on the New York Times website. To see
the raw data for yourself:
1. Navigate to the [article
   page](https://www.nytimes.com/interactive/2020/10/10/us/trump-properties-swamp.html)
2. Open the "Inspect Element" view on your browser
3. Search the page content for a script beginning with `window.LAYOUT`

<p class='caption'>
  <img
    src='/assets/media/writing/trump_property_patrons/data_view.png'
    alt='Viewing the input data on the NYT website'
    class='img-center bordered'
  />
  Viewing the input data on the NYT website
</p>

I copied the JSON object assigned to `window.ENTITIES` and converted it to a CSV
for convenience. You can view the dataset as a table
[here](https://github.com/njhenry/trump_property_patrons/blob/main/input_data/patron_data.csv).

**The data contains a total of 227 interest groups who patronized Trump
properties since 2017**. Each row, representing a different group or individual,
is made up of nine columns:
- `okn` *(true/false)*: include name and label in the publicly-available
  dataset?
- `key`: Uniquely-identifying label for the visualization. Anonymized except for
  rows where `okn` is true.
- `nyt_label`: Labels shown on the NYT website visualization
- `nyt_label_2`: Subtitles shown on the NYT website visualization
- `isMember` *(true/false)*: Is the group or individual a member of a Trump
  Organization property?
- `isBallardClient` *(true/false)*: Was the group a client of lobbyist Brian
  Ballard?
- `paidFirstTwoYears` *(true/false)*: "The Swamp That Trump Built" describes 60
  interest groups that spent $12 million at Trump Organization properties in
  2017 and 2018, allegedly winning preferable government treatment. Is this
  individual or organization one of those 60 groups?
- `type`: Classification of the interest group:

| Interest group type | Count |
|---------------------|-------|
| Advocacy Group      | 23    |
| Business            | 99    |
| Charity             | 10    |
| Foreign-biz         | 2     |
| Foreign-gov         | 15    |
| Foreign-other       | 4     |
| Religious Org.      | 19    |
| Trade Association   | 49    |
| *(Uncategorized)*   | 6     |

- `matched_property_id_1`: The primary Trump property where a given group spent
  money. The report mentions that some organizations patronized more than one
  property, but only the primary location has been reported in the
  publicly-available dataset:

| Trump Property                               | Count |
|----------------------------------------------|-------|
| Trump International Hotel - Washington, D.C. | 104   |
| Mar-a-Lago                                   | 69    |
| Trump National Doral - Miami                 | 40    |
| Trump National Golf Club - Bedminster        | 6     |
| Trump National Golf Club - Washington, D.C.  | 3     |
| Trump International Hotel & Tower - Chicago  | 3     |
| Trump International Hotel - Las Vegas        | 1     |
| Trump Turnberry - Scotland                   | 1     |

It is unclear whether this data represents all interest groups covered by the
investigation, or just a subset. Note also that the *amount* of money spent by
each group is not included in the data.

I cleaned the dataset in R, exported as a new JSON object, and [visualized the
results](/assets/js/trump_property_patrons/patrons_network.html) using an
interactive force-directed diagram built in D3 (Javascript). The source code
for this project is available [on
GitHub](https://github.com/njhenry/trump_property_patrons).

<h3 style='text-align:center;'>
  <a href='/assets/js/writing/trump_property_patrons/patrons_network.html'>
    Explore the patron network
  </a>
</h3>


## New findings

### Distribution of interest groups across properties

<p class='caption'>
  <a href='/assets/js/writing/trump_property_patrons/patrons_network.html'>
    <img
      src='/assets/media/writing/trump_property_patrons/patron_network_full.png'
      alt='Screenshot of the patron network web visualization'
      class='img-center bordered'
    />
  </a>
  Screenshot of the patron network web visualization
</p>

By color-coding interest groups by type, we can get a sense of the different
communities that formed around each Trump property. Businesses and trade
associations make up the bulk of political spenders at the Trump golf clubs in
Doral, Bedminster, Washington, D.C., and Turnberry. At Mar-a-Lago, business
interests intermingled with advocacy groups and charities, although business
groups were far more likely to buy memberships---all but three Mar-a-Lago 
members in this dataset were classified as businesses, with two of the remaining
members being Trump's chosen ambassadors to [South 
Africa](https://www.vogue.com/article/lana-marks-trump-south-africa-ambassador-handbags)
and the [Dominican
Republic](https://www.palmbeachpost.com/news/national-govt--politics/trump-friend-and-mar-lago-member-named-dominican-ambassador/UFYNFCj9OdwZPWO4JqyoEO/).
The Trump International Hotel in Washington, D.C. was home to a more motley crew
of political spenders, including religious groups and representatives from at
least 13 foreign governments.


### Named patrons not previously reported

Of the 227 Trump organization patrons included in this dataset, only 48 were
identified by name. **This includes 12 named interest groups not originally
reported in the Times article:**

| Interest group name                          | Data identifier                              | Trump Property       |
|----------------------------------------------|----------------------------------------------|----------------------|
| **Indian Government (Unlabeled)**            | **indian government**                        | **D.C. Intl. Hotel** |
| **U.S. Chamber of Commerce**                 | **us chamber of commerce**                   | **Doral**            |
| Center for Security Policy                   | center for security policy frank gaffney     | Mar-a-Lago           |
| Chirag Patel - Amneal Pharmaceuticals        | chirag patel                                 | Bedminster           |
| *Concerned Women for America (Unlabeled)*    | concerned women for america                  | D.C. Intl. Hotel     |
| Domestic Energy Producers Alliance           | domestic energy producers alliance hamm      | D.C. Intl. Hotel     |
| First Liberty Institute                      | first liberty institute                      | D.C. Intl. Hotel     |
| Florida Police Chiefs Association            | florida police chiefs association            | Doral                |
| Heartland Institute                          | heartland institute                          | D.C. Intl. Hotel     |
| Independent Petroleum Association of America | independent petroleum association of america | D.C. Intl. Hotel     |
| Big Dog Ranch Rescue                         | laurie simmons big dog ranch rescue          | Mar-a-Lago           |
| Sovereign Nations                            | sovereign nations michael ofallon            | D.C. Intl. Hotel     |

The two bolded groups were both listed among the 60 patrons who spent
substantial amounts of money at Trump properties during 2017-2018. The Indian
government's inclusion on this list may partly stem from a period in February
and March 2017 when Indian diplomats [spent
$18,650](https://www.citizen.org/article/catering-to-conflicts-influence-and-self-dealing-at-trumps-businesses/)
at the Trump International Hotel in Washington, D.C.; for its part, the U.S.
Chamber of Commerce hosted a [three-day executive
retreat](https://maplight.org/story/nations-biggest-lobbying-organization-plans-2018-meeting-at-trump-owned-miami-resort/)
at the Trump National Doral in March 2018.

The patronage dataset also provides new details about two groups briefly
mentioned in the article. The "Polish business group" apparently refers to a
2018 session of the [Polish-American Leadership
Summit](https://rtmx.pl/pals/2018) held by the Casimir Pulaski Foundation, a
Polish think tank. The Trump Organization's connection to the People's
Democratic Party of Nigeria appears to come through Atiku Abubakar, a Nigerian
presidential candidate, as [previously reported by
ProPublica](https://www.propublica.org/article/trump-inc-podcast-nigerian-presidential-candidate-atiku-abubakar).

| Interest group name                          | Data identifier                                      | Trump property   |
|----------------------------------------------|------------------------------------------------------|------------------|
| Polish business group                        | pulaski foundation polish american leadership summit | Mar-a-Lago       |
| People's Democratic Party of Nigeria         | atiku abubakar peoples democratic party of nigeria   | D.C. Intl. Hotel |


### Identifying big spenders

The Times article makes a remarkable claim about a subset of Trump property
patrons in this investigation:

> Just **60 customers** with interests at stake before the Trump
administration brought his family business nearly $12 million during the first
two years of his presidency, The Times found. Almost all saw their interests
advanced, in some fashion, by Mr. Trump or his government.

The average amount of money spent by these 60 organizations---approximately
$200,000 each---is believable given the other sums described in the article.
What strikes me is the implication that the Times has matched spending from each
of these customers to favorable treatment from the Trump administration. The
untold stories of these 60 interest groups are a ripe subject for more detailed
reporting as the investigation continues.

So who are these groups? While many of these organizations remain anonymous in
the underlying dataset, we can get a sense for the types of groups that may have
paid their way into the administration's good graces:

| Type              | Interest group name                          |
|-------------------|----------------------------------------------|
| Business          | Bank of America                              |
| Business          | David Storch, AAR Corp.                      |
| Business          | Deloitte                                     |
| Business          | Embry-Riddle Aeronautical University         |
| Business          | George C. Zoley, GEO Group                   |
| Business          | Jeffrey P. Feingold, MCNA                    |
| Business          | Morgan Stanley                               |
| Business          | *(31 unnamed businesses)*                    |
| Foreign-Gov       | Indian Government (Unlabeled)                |
| Foreign-Gov       | *(2 unnamed foreign governments)*            |
| Religious Org     | Christian Broadcasting Network               |
| Religious Org     | Billy Graham Evangelist Association          |
| Religious Org     | Summit Ministries                            |
| Religious Org     | *(2 unnamed religious organizations)*        |
| Trade Association | National Automobile Dealers Association      |
| Trade Association | National Shooting Sports Foundation          |
| Trade Association | U.S. Chamber of Commerce                     |
| Trade Association | *(10 unnamed trade associations)*            |
| Unknown           | *(1 unnamed and uncategorized organization)* |

Businesses and trade associations dominate this subset, and a full 29 of the 60
highlighted groups patronized the Trump National Doral resort.

<p class='caption'>
  <a href='/assets/js/writing/trump_property_patrons/patrons_network.html'>
    <img
      src='/assets/media/writing/trump_property_patrons/patron_network_paid2years.png'
      alt='Interest groups that spent $12M from 2017-2018'
      class='img-center bordered'
    />
  </a>
  Sixty interest groups that spent a combined $12 million at Trump properties
  during 2017 and 2018
</p>

The three foreign governments in this group, including India (unlabeled, but
inferred from the data identifier) and two unnamed countries, are not described
in the Times article. Their inclusion in a cohort where "almost all saw their
interests advanced" is unnerving---we deserve to know the identities of all
three governments, how much money was spent, and how that spending may have
influenced government policy.


### Clients of Brian Ballard

The article describes how Brian Ballard, a Florida lobbyist and GOP donor,
became "[the most powerful lobbyist in Trump's
Washington](https://www.politico.com/magazine/story/2018/04/02/most-powerful-lobbyist-in-trump-washington-217759)"
thanks partly to connections forged at Trump properties. Of the six clients
listed in the article, four are named in the Times article as well as the
underlying dataset:

- U.S. Sugar
- The private prison operator GEO Group, represented by founder George Zoley
- The Syrian-American activist group [Citizens for a Secure and Safe
  America](https://www.wsj.com/articles/from-anguished-appeal-to-presidential-tweet-how-a-doctor-changed-u-s-policy-1539864000),
  led by Rim Al-Bezem
- The People's Democratic Party of Nigeria, likely presidential candidate [Atiku
  Abubakar]((https://www.propublica.org/article/trump-inc-podcast-nigerian-presidential-candidate-atiku-abubakar))

The Times reports that two additional Ballard clients spent money at Trump
properties. While the underlying dataset does not include the names of these
clients, it does provide some identifying information:

- An unnamed foreign entity, listed as neither a government nor a corporation,
  that patronized the Trump International Hotel in Washington, D.C.
- An unnamed advocacy group which also patronized Trump's D.C. hotel

<p class='caption'>
  <a href='/assets/js/writing/trump_property_patrons/patrons_network.html'>
    <img
      src='/assets/media/writing/trump_property_patrons/patron_network_brianballard_clients.png'
      alt='Network of Brian Ballard clients who patronized Trump properties'
      class='img-center bordered'
    />
  </a>
  The six interest groups listed as clients of Brian Ballard
</p>


## Visualization

I created an interactive visualization to explore all 227 patrons described in
the Times dataset. The network structure is the same as in the original article,
with money flowing from patrons to a primary Trump property, and with all of the
Trump properties centered around the president.

Colors denote each interest group type, as assigned in the original dataset. You
can also focus attention on particular subsets of patrons: those identified by
name, members of a Trump property, Brian Ballard clients, and the 60 big
spenders highlighted by the Times.

<p class='caption'>
  <a href='/assets/js/writing/trump_property_patrons/patrons_network.html'>
    <img
      src='/assets/media/writing/trump_property_patrons/patron_network_focus_view.gif'
      alt='Switching focus between subsets of patron groups'
      class='img-center bordered'
    />
  </a>
  Switching focus between subsets of patron groups
</p>

You can click on nodes to learn more about individual patrons and properties, or
drag nodes to rearrange the chart.

<p class='caption'>
  <a href='/assets/js/writing/trump_property_patrons/patrons_network.html'>
    <img
      src='/assets/media/writing/trump_property_patrons/patron_network_explore.gif'
      alt='Dragging and highlighting nodes'
      class='img-center bordered'
    />
  </a>
  Dragging and highlighting nodes
</p>

You can explore the visualization for yourself
[here](/assets/js/writing/trump_property_patrons/patrons_network.html). The
source code underlying the visualization is available on
[GitHub](https://github.com/njhenry/trump_property_patrons/tree/main/web_viz).

We live in a crowded news cycle. The 1922 Teapot Dome affair involved
substantially *less* money changing hands (equivalent to $7.2 million today)
than the amounts detailed in the Times investigation---but while Teapot Dome is
still considered the biggest cabinet scandal before Watergate, the Times report
has already disappeared from the headlines without creating much of a splash in
public discourse.

Given the urgency of this report's claims, my goal is to make the underlying
data about Trump property patrons more accessible to a general audience. This
analysis is still far from complete: nearly 80% of interest groups remain
anonymous, their spending and influence comfortably hidden from the public eye.
In light of the ongoing general election, we deserve a full accounting of this
patronage network and its consequences for American government.


<hr />

***Note on data provenance**: This dataset is sourced from publicly-available
web content attached to a New York Times [online
article](https://www.nytimes.com/interactive/2020/10/10/us/trump-properties-swamp.html).
I have analyzed this data for my own personal use, in accordance with Section
2.3 of the New York Times [terms of
service](https://help.nytimes.com/hc/en-us/articles/115014893428-Terms-of-service).*

*This is a secondary analysis of a dataset published by the New York Times in
conjunction with Citizens for Responsibility and Ethics in Washington, Public
Citizen, and the 1100 Pennsylvania newsletter. I do not have firsthand access
to the records underlying this dataset, so I cannot confirm the veracity of any
claims or report with certainty the meaning of data labels.*

*Have questions or comments? [Let me know](/contact.html)!*
