```
1] What is a protocol stack, and how is it used in web development?
```
A protocol stack refers to a group of protocols that are runnning concurrently that are employed for the implementation of network protocol suite.The protocols in a stack determine the interconnectivity rules for a layered network model such as in the OSI or TCP/IP models.
* Application layer: includes a box for HTTP.
* Transport layer: include a box for TCP.
* Network layer: includes a single box for IP (v4).
* Link layer: includes boxes for Ethernet & Wireless LAN.

When a message is sent through the Internet, it doesn't use every protocol in the suite. It does use at least one protocol from every layer, however.
When you're loading a webpage from a domain your browser has never visited before, your browser may need to make a DNS request. This stack of protocols is used when a DNS request is sent through the Internet:Then your browser will make an HTTP request to fetch the webpage. This protocol stack is used when an HTTP request is sent through the Internet.  HTTP is at the heart of any web application you could build.
* HTTP Is a Hypertext Transfer Protocol
When you open a website in a browser, you see text, images, and embedded content. All this content is loaded from servers elsewhere on the web. It is the role of the browser—also called a client—to raise a request for this content. The request is sent to a server, which in return sends a response back to the browser. Both the request and the response are sent as human-readable text.
From top to bottom:

HTTP URLs
Requests are sent to servers specified with Uniform Resource Locators (URLs). I'm sure you are already familiar with URLs, but for the sake of completeness, I'll include it here. URLs have a simple structure that consists of the following components:

https://www.domain.com:1234/path/to/resource?a=b&x=y
* https specifies the protocol. It can be http or https, which makes the communication secure. 
* www.domain.com is the host.
* 1234 is the port. In many cases, the browser hides the port. The default is 80.
* path/to/resource is the resource path. It helps the server identify a specific resource and generate the right response. 
* ?a=b&x=y are query string parameters. Query string parameters are used by the server to spot the right resource. 

The URL identifies the specific host with which the client wants to communicate. It does not perform any action. This is where the request comes. HTTP has a formalized way of framing requests that capture all the required pieces of information, which can be applied by any kind of application.

```
2] What are the different types of web servers, and how do they differ in terms of functionality and performance?
```
A server is a piece of computer hardware or software that provides functionality for other programs and devices. Server provides various functionalities, often called services such as sharing data or resources among multiple clients, or performing computation for client. Single server can serve multiple clients, and a single client can use multiple servers. A client process may run on the same device or may connect over a network to a server on a different device.
```
Servers are available in various types. We will list few of them:
```
Proxy Server

A proxy server sits between a client program (typically a Web browser) and an external server (typically another server on the Web) to filter requests, improve performance, and share connections.

Mail Server

Almost as ubiquitous and crucial as Web servers, mail servers move and store mail over corporate networks (via LANs and WANs) and across the Internet.

Server Platforms
A term often used synonymously with operating system, a platform is the underlying hardware or software for a system and is thus the engine that drives the server.

Web Server
At its core, a Web server serves static content to a Web browser by loading a file from a disk and serving it across the network to a user’s Web browser. This entire exchange is mediated by the browser and server talking to each other using HTTP.

Application Server
Sometimes referred to as a type of middleware, application servers occupy a large chunk of computing territory between database servers and the end user, and they often connect the two.

Real-Time Communication Server
Real-time communication servers, formerly known as chat servers or IRC Servers, and still sometimes referred to as instant messaging (IM) servers, enable large numbers users to exchange information near instantaneously.

FTP Server
One of the oldest of the Internet services, File Transfer Protocol makes it possible to move one or more files securely between computers while providing file security and organization as well as transfer control.

```
3] What is web hosting, and what are the different types of hosting services available for websites?
```
Web Hosting is a service that helps web browser clients to easily access electronic information on the Internet by hosting/posting web-server programs (websites or web pages) on a computer system.

A web server, often known as a web host, is a computer system that hosts websites. Internet users need to use the website URL or domain name in their browser to access a website. After that, the user's machine will connect to the web server, and the web pages will be provided to them through the browser.

The following are the types of Web hosting services −

 Free Hosting
This is a non-commercial, free web hosting service. This sort of hosting is offered from several well-known websites that provide free hosting for a limited number of web pages.

Advantages
Free of charge
Advertisements, banners, and several other types of advertising media can be placed on websites

Disadvantages
Customer service is lacking
Data transmission is limited due to a lack of bandwidth

Virtual/Shared Hosting
It is a hosting web service in which several websites are hosted on a single web server linked to the Internet. With a hosting package from the wed b hosting firm, you may show yourself to your web audience as an autonomous personality.

Advantages
Simple and inexpensive
Hosting service ensures security 24 hours a day, seven days a week technical assistance

Disadvantages
Shared resources might cause the entire server to slow down
Dedicated hosting is more versatile

Dedicated Hosting
This type of hosting is suited for huge websites with high traffic. The company aspiring to go online rents an entire web server from a hosting company. This is suitable for companies hosting big websites, maintaining other sites, managing a big online mall, etc.

Advantages
Ideal for large business
Strong database support

Disadvantages
It's very expensive
Requires superior skill sets
Co-location Hosting
Colocation hosting allows you to run your web server on a service provider's facilities. It's identical to dedicated hosting, except that the user-business now provides the server, and the hosting provider takes care of the physical needs.

Advantages
Increasing Bandwidth Unlimited Software Options and a High Uptime
High-level security

Disadvantages
Configuration and debugging are complex
It's pricey

```
4] What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?
```
What is scaling ?

The scalability of an application can be measured by the number of requests it can effectively support simultaneously. The point at which an application can no longer handle additional requests effectively is the limit of its scalability. This limit is reached when a critical hardware resource runs out, requiring different or more machines. Scaling these resources can include any combination of adjustments to CPU and physical memory (different or more machines), hard disk (bigger hard drives, less “live” data, solid state drives), and/or the network bandwidth (multiple network interface controllers, bigger NICs, fiber, etc.).
Scaling horizontally and scaling vertically are similar in that they both involve adding computing resources to your infrastructure. There are distinct differences between the two in terms of implementation and performance.

What’s the main difference?
* Databases
  * In a database world, horizontal scaling is usually based on the partitioning of data (each node only contains part of the data).
  * In vertical scaling, the data lives on a single node and scaling is done through multi-core, e.g. spreading the load between the CPU and RAM resources of the machine.
* Downtime
   * In theory, adding more machines to the existing pool means you are not limited to the capacity of a single unit, making it possible to scale with less downtime.
   * Vertical scaling is limited to the capacity of one machine, scaling beyond that capacity can involve downtime and has an upper hard limit, i.e. the scale of the hardware on which you are currently running
* Concurrency
  * Also described as distributed programming, as it involves distributing jobs across machines over the network. Several patterns associated with this model: Master/Worker*, Tuple Spaces, Blackboard, MapReduce
  * Actor model: concurrent programming on multi-core machines is often performed via multi-threading and in-process message passing.
* Message passing
  * In distributed computing, the lack of a shared address space makes data sharing more complex. It also makes the process of sharing, passing or updating data more costly since you have to pass copies of the data
  * In a multi-threaded scenario, you can assume the existence of a shared address space, so data sharing and message passing can be done by passing a reference.
* Examples
  * Cassandra, MongoDB, Google Cloud Spanner
  * MySQL, Amazon RDS

```
why is it important for web applications? 
```
There are various factors to consider. These include:
* Performance - Scaling out allows you to combine the power of multiple machines into a single virtual machine with the combined power of all of them.
* Flexibility - If your system is solely designed for scaling up, you are effectively locked into a minimum price set by the hardware you are using.
* Regularity of Upgrades - Again, flexibility is important here. Building an application as a single large unit will make it more difficult to add or change pieces of code individually without bringing the entire system down
* Redundancy - Horizontal scaling offers built-in redundancy in comparison to having only one system in vertical scaling, and thus a single point of failure.
* Cost - As more large multi-core machines enter the market at significantly lower price points, consider if there are instances in which your application (or portions of your application) can be usefully packaged in a single box and will meet your performance and scalability goals. 

```
5] What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?
```
What is search engine optimization?
Search engine optimization (SEO) is the art and science of getting pages to rank higher in search engines such as Google. Because search is one of the main ways in which people discover content online, ranking higher in search engines can lead to an increase in traffic to a website.

In Google and other search engines, the results page often features paid ads at the top of the page, followed by the regular results or what search marketers call the "organic search results". Traffic that comes via SEO is often referred to as "organic search traffic" to differentiate it from traffic that comes through paid search. Paid search is often referred to as search engine marketing (SEM) or pay-per-click (PPC).

 developers optimize their websites for better search engine rankings as follows:
 
Understanding how search engines work is only the first step of the process in improving a site's search rankings. Actually improving a site's rank involves leveraging various SEO techniques to optimize the site for search:

Keyword research - Keyword research is often the starting point for SEO and involves looking at what keywords a site is already ranking for, what keywords competitors rank for, and what other keywords potential customers are searching for. Identifying the terms that searchers use in Google search and other search engines provide direction on what existing content can be optimized and what new content can be created.

Content marketing - Once potential keywords are identified, content marketing comes into play. This can be updating existing content or creating brand new pieces of content. Because Google and other search engines place a premium on high-quality content, it's important to research what content is already out there and create a compelling piece of content that provides a positive user experience and has a chance of ranking higher in the search engine results. Good content also has a greater chance of being shared on social media and attracting links.

Link building - Because links from external websites (called "backlinks" in SEO parlance) are one of the core ranking factors in Google and other major search engines, obtaining high-quality backlinks is one of the main levers that SEO has. 

On-page optimization - In addition to off-page factors such as links, improving the actual structure of the page can have tremendous benefits for SEO, and is a factor that is entirely in the control of the webmaster. Common on-page optimization techniques include optimizing the URL of the page to incorporate keywords, updating the title tag of the page to use relevant search terms, and using the alt attribute to describe images. Updating a page's meta tags (such as the meta description tag) can also be beneficial-- these tags don't have a direct impact on search rankings, but can increase click-through rate from the SERPs.

Site architecture optimization - External links are not the only thing that matters for SEO, internal links (the links within one's own website) play a large role in SEO as well. Thus a search engine optimizer can improve a site's SEO by making sure key pages are being linked to and that relevant anchor text is being used in those links to help improve a page's relevance for specific terms. Creating an XML sitemap can also be a good way for larger pages to help search engines discover and crawl all of the site's pages.

Semantic markup - Another SEO strategy that SEO experts utilize is optimizing a website's semantic markup. Semantic markup (such as Schema.org) is used to describe the meaning behind the content on a page, such as helping to identify who the author of a piece of content is or the topic and type of content on a page. Using semantic markup can help with getting rich snippets displayed in the search results page, such as extra text, review stars and even images. Rich snippets in the SERPs doesn't have an impact on search rankings, but can improve CTR from search, resulting in an increase in organic traffic




