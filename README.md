# NOTES

## FONTS
Use https://fonts.google.com/ for free fonts
 example: 
  @import url('https://fonts.googleapis.com/css2?family=Source Code Pro:wght@300&display=swap');
  body {
    font-family: 'Source Code Pro';
  }

### Jenson's Midterm Review
Q1:   HTML `<div>` does?        creates a division element  

Q1.5: HTML `<b>` means?       bring attention  

Q2:   To point to another DNS record, you should use the following DNS record type:           CNAME (think of it as an alias)  

Q2.5: What would you use to point to a literal IP address:      use an A record  

Q3:   t/f You can use this CSS to load fonts from Google:                 true  

            @import url('https://fonts.googleapis.com/css?family=Quicksand');

Q4:   What will the following output?                burger fries taco shake noodles  

            const p = new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log('taco');
                resolve(true);
              }, 10000);
            });
            console.log('burger');

            p
            .then((result) => console.log('shake'))
            .catch((e) => console.log('salad'))
            .finally(() => console.log('noodles'))

            console.log('fries');
Q5:   Which of the following is valid JSON?   {"x":3}  Key value must always be in double quotes   
      `{x:3}   {"x":3}   {'x':3}   {"x":undefined}`

Q6:   How would you turn only the BYU text blue using CSS?  `div.header {color:blue}`  
the second one is wrong because there is no header element in use
```
<div>other</div>
<div> class="header">BYU</div>
```
`div.header{color:blue;}     header {color: blue;}     div {color: blue;}    div#header {color: blue;}`  

Q7:   Which is NOT a valid way to include JavaScript in HTML?  `<javascript>1+1</javascript>`  

`<script>1+1</script>     <div onclick='1+1'/>     <script src='main.js'/>     <javascript>1+1</javascript>`

Q8:   What does the following code output? ['rat', 'fish'] 
```
let a = ['cow', 'rat', 'fish'];
let b = a.filter(v => v.match(/A|f/i));
console.log(b);
```
filter function returns an array with only the values that are told to be returned   
match function is matching with RegEx `//` denote RegEx   
the `i` stands for in case-sensitive   

Q9:   Which of the folling is NOT a valid Javascript function?  `function f(x) = {}`  Javascript takes no equal sign in the middle

`function f(x) {}     const f=function(x) {}     function f(x) = {}     const f = (x) => {}`  

Q10:   The CSS property padding: puts space around the content of selected elements
```
p {
  padding: 1em;
}
```

Q11:  What is the order of the CSS box model, starting from the outside in?   Margin, border, padding, content  

Pals Before Marriage (Peanut Butter Mayonaise)  

Q12:  What does the following code output?   cow:rat:fish
```
let a = ['cow', 'rat', 'fish'];
let b = a.reduce((a,v) => [a,v].join(':'));
console.log(b);
```
reduce function takes an array and reduces it down to one value
join function creates and returns a new string, separated by commas or a specified separator string

Q13:  What is the HTML tag for an unordered list? `<ul>`

Q14:  What does the following code do?    Adds a mouseover event listener to a p element
```
document.querySelector('p').addEventListener('mouseover', console.log);
```
document object is always available in your interpreter, it gives you back the DOM basically (the object to interact with the DOM)  
querySelector allows you to pass the first CSS selector into it  (querySelectorAll would return an iterator which would all you to access all of the specified selectors)  
addEventListener whenever there is a mouseover, it will call the event handler/callback function you provide (console.log)  

Q15:  Which HTML will create a valid hyperlink?   `<a href = 'https://c.com/>x</a>`  
`<img src= "__" alt="___">` is for image tags  

Q16:  What does the following code output?     ['a1', 'a2', 'a3']
```
let a = [1, 2, 3];
let e = a.map(number => {
  return ('a' + number)
});
console.log(e);
```
map function takes an array and maps it to an array of equal size with the values mapped to something else  

Q17:  What will the following output?    A D B  
```
const a = async function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {console.log('D'); resolve(true)}, 10000);
  })
}

try {
    console.log('A');
    await a();
    console.log('B')
} catch(e) {
    console.log('C');
}
```

Q18:  What does the DOM textContent property do?    Sets the child text for the an element  

Q19:  Which of the following is a DNS subdomain?   cs260.cs.byu.edu  (the whole thing is the subdomain)  

Q20:  How will the "hello world" text be oriented?    Two lines, World and then Hello  
```
<html>
<head>
  <style>
    div{
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
  </style>  
</head>
<body>
  <div>
    <p>Hello</p>
    <p>World</p>
  </div>
</body>
</html>
```

Q21:  Executing the following will outpput:     4  
```
const f = y => ++y;
console.log(f(3));
```
if there were curly braces it would return `undefined` because you didn't specify what the return is  

Q22:  Which of the folling is a valid JavaScript object?   {n:1}  
` {"n" = "1"}     {n:1}     {n=1}     {"n"=1}`  
no `=` in js with key value pairs  
having quotes is perfectly fine... JSON requires double quotes.. Javascript doesn't..  

Q23:  The following console command makes a script executable:   chmod +x deploy.sh  
chmod +x allows executalbe permission
sudo stands for "substitue user do" or "super user do"; allows you to temporarily elevate your current user account to have root privileges  
ls lists contents of current directory
ssh 


## Memory of Light's notes
## SIMON Feb 4 What I learned
./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s simon
This deletes previous deployment of simon, copies all of the files in the directory, and tells caddy to host the files under the simon subdomain.
I learned a ton about the different html elements and their attributes and what they actually do. For example, the for attribute associates with an id and links the label to the input box so that when you click the name you are directed to the input. In addition I took it upon myself to study the paths and how that works. I learned that M is moveto and basically just specifies a point and another and another until you have a shape that can be filled. Unlike M, L actually draws lines as it moves. Q makes a quadratic curve starting that the last point previous to Q and going to the second input of Q. The first Q input is the focal point. I also learned how coordinates are counted in the viewBox. They start at the top left which is 0,0. Down is positive y, right is positive x. I was also able to just really get in my head how certain elements can be used and the organization of a page is displayed. It was confusing for a while because it seemed like many elements didn't produce noticeable effects, but now I'm seeing the potential for a lot of these division to be used for styling and interactivity purposes which really cleared a lot of confusion. I also learned that readonly is applied to input when you want it to just be display and not have the user input anything. Overall it was mostly learning about individual attributes and elements of which I made note of in repsective sections of this document. 
## Simon Feb 14 CSS What I learned

Positioning Functions
- float moves an element to the left or right of its container element and allows inline elements to wrap around it. 
- gap: value - This property is specified as a value for <'row-gap'> followed optionally by a value for <'column-gap'>. If <'column-gap'> is omitted, it's set to the same value as <'row-gap'>. Used in grids. synonymous with grid-gap: value;
- margin: top right bottom left;
- top: value - moves the element a distance from the top of its container. takes % as well
- bottom: val - moves element up a distance from the bottom of its container, etc
- right
- left
- translateX() - moves an element horizontally on the 2D plane. It takes a distance value as a parameter, which can be specified in pixels (px), ems (em), or other length units, and indicates how far to move the element along the horizontal axis. Negative moves left, positive moves right; if you use a percent it refers to a percent of the element's own width and height; DOES NOT AFFECT STATIC ELEMENTS
- translateY() - same as X but vertical
- transform: translateX() translateY() - transform property allows you to apply a transformation to the element while keeping its position and layout within the document flow intact. transform allows you to act on static elements
- flex: flex-grow flex-basis; flex-grow defines how much the item will grow to fill around it. 1 means it will fill all available space. flex-basis is the value that says the intitial size of the flex item.
margin-top: val - sets the margin space on the top
margin-botton
margin-left
margin-right

Design Functions
- border-radius: 50% will make a circle; it gets complicated after that with all the values
- width: 100% - sets the width equal to the width of the parent element

CSS Units and Definitions
80vmin - 80 percent of the viewport's smaller dimension  
px - pixels  
em - the font size of the parent element  
content box - the element; default size of element;  
padding - the next out, clears an area around the content. The padding is transparent; default 0  
border- the edge; default 0  
margin- empty space between elements if you add it; default 0  
fr - only availabe in display: grid; means fraction of available space. 1fr means all of the available space. You can also combine them in rations so 1fr and 2fr would split the space into three parts and give 1 part to an element and 2 parts to another

### Jan 27
`curl` is basically a command line browser. `curl -v` lets you see all the communication between your device and whatever url you put in after curl -v. Do `curl -v http://URL
- https is secure, http is not secure.
- Layers
Application (http), Transport (TCP- slower but more methodical, UDP-faster but more error prone), Internet (IP), Link (Physical connection like wiring)
- Web server has services within it.
- Multiple ports on a server. Port 443 is a secure http connection. You can have a gateway service on your web server that links to different ports ig.
- servers can talk to other servers. service are just programs in the servers

## Console Commands
`cd` -change directory  
`mdkir` make directory  
`touch` create files and modify metadata  
`cp` copy files  
`mv` move and rename files  
`rm` delete files or directories  
`curl` download files found at specific URLs  
`grep` search for fragments of text inside larger bodies of text  
`less` `cat` view file's contents  
`awk` `tr` `sed` manipulate and transform streams of text  
`cd path/to/directory`
ommitting the slash means the path is relative to your current directory  
`cd ..` move back up one directory  
`ls` list the stuff in the directory  
`ls -l` list in more detail  
`ls -la` list all files in more detail even the hidden ones  
`--help` get info on command  
`man` get info on command  
`mkdir newDirectory`  
`rmdir directory`  
`rmdir -rf` remove directory and everything in it  
`touch fileName`  
`mv current/file/path new/file/path`  
`cp current/path new/path`  
`*` is a wildcard character  
tldr.sh explains a lot of commands  
`wc` counts # of words, lines, chars, or bytes of whatever is inputted  
## GitHub
directory -> staged -> .git
git add puts on stage, git commit puts in into the repository, git checkout moves to a previous commit. Think about Github as like another person on a computer. It's just a server somewhere that holds git and takes your commits and passes them back out. git push - pushes a commit to a clone of your repository (usually to GitHub). git pull - pulls the newest commits down.
- When you create a repository you don't want git to be bugging you about putting things in the commit or something. Anything you put in the gitignore file won't be put in the repo.
## Development and Production environments
-my development environment is my computer and my production environment is AWS  
-Never develop in the production environment  
-Deployment of app should be done via a CI (continuous integration) process- this checkouts the application code, links it, builds it, tests it, stages it, tests it more, and finally pushes the application to the production environment and notifies.  
-we are gonna use a simple console shell script for our CI process.  
-to deploy run `./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon` or something akin to that.  
k provides the credential file to access production environment, h is domain name of prod environment, s is the name of the app you are deploying (simon or startup).

## The internet
IP addresses are the the addresses of servers. IP addresses are how computers find each other. We don't usually use the string of numbers and so we just use like google.com. Computers we use are clients bc they are not directly connected to the internet. They use an ISP (internet service provider). When info is transfered on the internet it's transferred in packages that are reassembled at arrival. IP addresses also apply to things indirectly connected to the internet. Anywhere two or more parts of the internet intersect, there is a router. Routers direct our packets of info around. When you send something, the info is wrapped in layers of all the IP addresses it passes through (routers have IP addresses). Info can go back to where it came from by looking at the IPs it's wrapped in and retracing its steps.

### TCP/IP layers
1. Application- user functionality, web (http), mail, files, remote shell, chat. 
2. Transport (TCP)- breaks application layer into small chunks and sends the data.
3. Internet (IP)- makes the connections, devices need IP addresses to talk ex. 128.187.16.184 (BYU), we usually use domain names as a stand in for IP addresses. Doing a lookup in the DNS (Domain name system) can convert domains names to ip addresses. Use `dig byu.edu` to find the IP address for byu on your terminal. To connect a device first asks for a connection route which consists of hops around the network until a path is discovered and connection established. Then the Transport and application layers start exchanging data. To elucidate the path, use the `traceroute byu.edu` to see how your computer connects. If you run `traceroute` again you might get a different path since it's dynamic.
4. Link- physical connections and hardware

## Web Servers
- Monolithic web servers- http software on a hardware server, olden days,  these are outdated now we have dynamic functionality with allows us to generate HTML on demand in reponse to users

- Web and application service can be combined ig
- Web service gateways- they run on the common http port 443. Since multiple web services can be run on the same computing device, different ports are used so a unique connection can be made to each. The gateway or reverse proxy basically listens on 443 and directs the user to the proper port.

- Microservice- web service that provides a single functional purpose. Since functionality is partitioned it can be managed independently from other stuff in a large system. They are also good at handling large differences in user volume by just running more instances of the service.

- I guess we're serverless now?? This section really made no sense.

## Domain Names
- Sometimes there are multiple IP addresses associated with one domain name. This is in case one address fails to make a valid connection. Domain name- text string listed in a database called domain name registry
- root domain with subdomain prefixes. TLD (top level domain)- is things like com, edu, or gov
so the root domain is like byu.edu, google.com, alabama.gov, etc. ICANN controls the list of TLDs.
- you can have any number of subdomains off the root domain ex. highways.utah.fed.gov has three subdomains.
- use `whois byu.edu` to get info about a domain name off the DNR.

## DNS
- once the domain is in the registry it is listed with a domain name system (DNS) server. You also need to lease the IP address. Every DNS on earth references a few special DNS servers that are the authority in charge of associating domain names with IP addresses. 
- we mainly want to look at the address (A) and the canonical name (CNAME) records.
- A- maps from domain name to IP address
- CNAME- maps one dmain name to another domain name (this acts like a domain name alias). *CNAME could do things like map byu.com to the same IP as byu.edu so that either will get you to the website
- enter domain name into browser, browser checks to see if it has the name already in its cache of names, if not it contacts a DNA server and gets IP address. If the DNS server doesn't have the domain name it requests the name from an `authoritative name server` DNS. If that doesn't know you get a unknown domain name error. If the name is found, your browser makes an Http connection to the associated IP address. 
- TTL (time to live)- different caching layers will honor the TTL and clear cache after requested period has passed.
- you can pay to lease an unused domain name.

## Caddy
web service gateway that listens for incoming Http requests. Caddy then serves up the files or routes the request to another web service. The ability to route requests is called a `gateway` or `reverse proxy` and allows you to exponse multiple web services as a single external web service. 
- handles creation and rotation of web certificates which allows us to easily support https
- serves up all our static html, css, and javascript files,

### Important Caddy files
* config file ~/Caddyfile
- contains definition for routing http requests that caddy receives. Never modify this file manually except when you configure domain name of your server.
* HTML files ~/public_html
- directory of files caddy serves up when requests are made the root of your web server.
## Web Services
* NS record - name server record and basically provides legitimacy between the DNS records and registration so that it knows you have lisence to use your domain name. It contains the names of the authoritative name servers that authorize you to place DNS records in this DNS server. Those same authoritative name servers are listed with the registrar that you leased your domain name from. That way the server can verify that the DNS records and registration match and are authorized to represent the domain name when defining DNS records
* SOA record - start of authority, provides contact info about the owner of the domain
## Security
- https - secure hypertext transport protocol (http with a secure connection before any data exchange happens). Secure connection means that data is encrypted using TLS protocol.
- TLS works by negotiating a shared secret that is then used to encrypt data. (use curl -v to see this)
- modern browsers expect servers to only use https and the next version of http will only support secure connections so any web application should be built with a secure connection.
### Web Certificates
- genertated by trusted 3rd party using encryption. Th issuer is responsible for verifying thst the certificated owner actually owns the domain name. So once I have a certificate, I can serve it from the server, the browser can see it and validate it using the public keys of whoever issued me the certificate.
- Ever since `Let's Encrypt` was made, certificates have become free and the web has become a safer place.
1. HTTPs request made
2. Caddy asks let's encrypt to verify that domain for requested certificate is owned by requester. 
3. L.E. tells requester to return a digitally signed response for a temporary URL when the request is made
4. L.E. makes http request and if successful they give the certificate to the owner.
     

## HTML (Hypertext Markup Language)
foundational content structure all web apps build on. Originally a format for web docs or pages. Now a page represents a single page application (SPA) or a large group of hyperlinked pages that form a multipage application (MPA).
- text is valid HTML
- always include `<!DOCTYPE html>` at the top of the HTML file. This tells the browser the type and version of the document
#### Elements and tags
Elements are represented with enclosing tags. 
- tag- a delimited textual name we use to designate the start and end of an HTML element as it appears in an HTML document.
- tags are delimited with < and >
- the closing tag will have / before its name.
`<p>Helloworld</p>` This denotes that this is a paragraph.
- You could write a thing like this- 
```
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <main>
      <p>Hello world</p>
    </main>
  </body>
</html>
```
and it would appear the same as ours above because HTML is about structure.
the above means:
* html- about top level page structure
* head - about page and page title
* body - content
* main- main content excluding headers, footers, navigation helps, etc.
#### Attributes
attributes describe specific details of the element. ex. the `id` attribute gives a unique ID to the element so you can distinguish it from other elements.  
- `class` attribute- designates element as beeing classified into a named group of elements.   
-written in the element tag with aname followed by an optional value.   
`<p id="hello" class="greeting">Hello world</p>`  
##### Common Input attributes
`name` name of imput. submitted as the name of the input if used in a form, can be used to reference the element in javascript  
`disabled` disables the ability for the user to interact with the input  
`value` the initial value of the input  
`required` signifies that a value is required in order to be valid  
`for` associates label with a control element  
`placeholder` - used to make a phantom value in an input box  

#### Hyperlinks
-represented with an anchor `a` element that has an attribute containing the address of the hyperlink reference.
- ex. `<a href="https://byu.edu">Go to the Y</a>`

#### Common elements
`html` page container  
`head` header information  
`title` title of page  
`meta` metadata for the page such as character set or viewport settings  
`script` JavaScript reference.   
`include` external content reference  
`body` entire content body of page  
`header` header of main content  
`footer` footer of main content  
`nav` navigational inputs  
`main` main content of page  
`section` a section of the main content  
`aside` aside content from the main content  
`div` a block division of content  
`span` an inline span of content  
`h<1-9>` text heading. From h1, the highest level, down to h9, the lowest level  
`p` a paragraph of text  
`b` bring attention  
`table` table  
`tr` table row  
`th` table header  
`td` table data  
`ol, ul` ordered or unordered list  
`li` list item  
`a` anchor the text to a hyperlink  
`img` graphical image reference  
`dialog` interactive componenet such as a confirmation  
`form` a collection of user input  
`input` user input field  
`audio` audio content  
`video` video content  
`svg` scalable vector graphic content  
`iframe` inline fram of another HTML page  
#### Comments  
`<!-- commented text -->` this will be ignored when the browser renders the doc
#### Special Characters
- if you want to use special characters you need to escape them using entity syntax.
& - `&amp;`
< - `&lt;`
> - `&gt;`
" - "
' - '
😀 - `&#128512;`
etc.
#### HTML Versions
Year	Version	Features  
1990	HTML1	format tags  
1995	HTML2	tables, internationalization  
1997	HTML3	MathML, CSS, frame tags  
1999	HTML4	external CSS  
2014	HTML5	email, password, media, and semantic tags  

#### Rendering HTML
- You can save any HTML file to your disk and then open the file in your browser or you can open it in VScode and use the Live Server extension to display html. 
#### HTML Structure
#### HTML Input Elements
`form` input container and submission  
`fieldset` labeled input grouping  
`input` multiple types of user input  
`select` selection dropdown  
ex.
```
  <select id="select" name="varSelect">
    <option selected>option1</option>
    <option>option2</option>
    <option>option3</option>
```
`optgroup` grouped selection dropdown  
`option` selection option  
`textarea` multiline text input  
`label` individual input label  
`output` output of input  
`meter` display value with a known range  
* form used to be necessary but since Javascript, it has lost much of its usefulness.
##### To set the type of Input:
- use the type attribute  
text - single line textual value  
password - obscured password  
email - email address  
tel - telephone number  
url - url address  
number - numerical value  
checkbox - inclusive selection  
radio - exclusive selection  
range - range limited number  
date - year, month, day  
datetime-local - date and time  
month - year, month  
week - week of year  
color - color  
file - local file  
submit - button to trigger form submission  
#### HTML Media elements
`img, audio, and video` are just references to external files.
`svg and canvas` internal media elements that contain code for rendering a visual image that can even be animated
* media tags that reference external media all take URL as an attribute. you can put the url as a relative path or a full path. Make the path as relative as possible so that if you change your code it doesn't affect the url.
`img` - specify the `src` attribute with the url to the source image. specify an `alt` attribite to describe the image for accessibility.  
`audio` - uses src, include `controls` if you want the user to be able to control the audio playback (it makes a visual representation of the audio) `autoplay` starts the audio as soon as the audio file is loaded `loop` keeps playing it over and over  
`video` - uses src, controls, and autoplay, you may need to include `crossorigin="anonymous"` if you are requesting files from a different domain than the one serving your content  
`svg` - scalable vector graphics, allows you to render graphics inline in your HTML. Lots of attributes yeah  
`canvas` - facilitates 2D drawing and animation, requires javascript to work  
#### SVG Path Code
M = moveto  
L = lineto  
H = horizontal lineto  
V = vertical lineto  
C = curveto  
S = smooth curveto  
Q = quadratic Bézier curve  
T = smooth quadratic Bézier curveto  
A = elliptical Arc  
Z = closepath  

### Command for running simon
./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s simon
This deletes previous deployment of simon, copies all of the files in the directory, and tells caddy to host the files under the simon subdomain.

## CSS (Cascading Style Sheets)
animate, display custom fonts, respond to user actions, alter layout of page dynamically based off of device being used
Functionality of CSS
- defining rulesets or rules
- a rule is comprised of a `selector` that selects elements to apply the rule to, as well as a `declaration` or two or however many that represent the `property` to style with the given `property value`.
consider this rule:
EX. `selector`p{
 `property`color: green;`green is the value`
 `line is the declaration`
}
Ex. p {
      color: green;
    }
The following rule:
Ex. p {
      font-family: sans-serif;
      font-size: 2em;
      color: navy;
      text-shadow: 3px 3px 1px #cccccc;
    }
selector p selects all paragraph elements in the doc. The 4 declarations then change font, increase size, change text color, create a shadow.
### Associate CSS w/ HTML
1. use the style attrtibute on an HTML element and explicitly assign one or more declarations.
ex. `<p style="color: green">CSS</p>`
2. use the style ELEMENT- not attribute- to define CSS rules w/in the doc. This should appread in the head element of the doc so the rules apply to the whole thing.
3. use the link element to create a hyperlink reference to an external file containing CSS rules. This must also be in the head element. This is the preferred way.
Elements inherit the rules applied to their parents, so lower level declarations override higher level ones to allow for specificity.
### The box model
CSS defines everything as a box. Styles apply to everything in the box. Inner to Outer.
- the element's content (text)
- the padding (stuff like background color)
- border (color, thickness, line style)
- margin (considered external to the styling of the box and so represents whitespace)
The default width and height of an element is the width and height of the content box (the innermost box). YOu can changed the `box-sizing` CSS property from default `content-box` to `border-box` to redefine width and height to also include padding and border. This can make it easier to style elements when their visual size matches their actual size.
### Selectors
the selector will determine which elements are affected by the rule. `*` is a wildcard selector that selects all elements.
You can be more specific with selectors by using `descendant combinators`. For instance, saying section h2 {
  color: #004400;
}
would only apply the color to h2 elements who were within or "descended from" section elements.
#### Combinators
- Descendant - anything within; div p (selects all p elements within div elements)
- Child - one level within; div > p (selects all p elements that )
- General Sibling - div ~ p (selects all p that follow a div and have the same parent elements as div)
- Adjacent Sibling - div + p (selects p that is immediately following a div and has the same parent elements as div)
#### Class Selectors
any element can have 0 or more classifications
to use the classification in a rule do
.classnamehere {
  stuff to implement
}
you can also combine element with class
ex.
p.summary{
  stuff
}
this changes all p items of summary class.
#### ID Selector
prefix id with `#`
ex.
#idhere {
  stuff
}
changes the element with that id.
#### Attribute Selector
support wildcards
ex.
p[class='summary'] {
  color: red;
}
this changes all p elements with the class attribute of summary
a[href] selects every a element with the href attribute
#### Psuedo Selector
section:hover {
  blah blah
}
changes the section only when mouse is hovering over it.
### CSS Fonts
`font-family` property defines what fonts should be used. The value represents an ordered list of fonts of which the first one will be used by default.
- 4 major font families: serif, san-serif, fixed, and symbol. serif is a small stroke attached to ends of a characters major strokes. san-serif is without the serif. fixed means all characters the same size. symbol is non-language characters.
@font-face{
  font-family: 'blah blah';
  src: url('blahblah');
}
This lets the browser load a font you give the source for so that your app looks the same on every device. You can either host font files on your server or load from a font provider like google fonts.
### CSS Animation
use animation properties and define keyframes for what the element should look like at different times in the animation
first put
animation-name: namehere
animation-duration: #s;
in the element you want animated
Then in the CSS doc put
@keyframes namehere{
  from{
    initial state of animation
  }
  83 {
    this section is optional, but you can add sections between from and to which happen at the percentage through the animation of the number you enter. This happenn 83% of the way through the animation.
  }
  to{
    final state of animation
  }
}
CSS will figure out how to get from state to state.
### Responsive Design
-the ability to reconfigure the interface based off of the device running the webiste
#### Design
- `display` in CSS will allow you to change how an HTML element is displayed by the browser. Common values
- `none` don't display element. 
- `block` display element with a width that fills its parent element. (p and div have block display by deault)
- `inline` display element with a width that is only as big as its content (b and span have inline as default)
- `flex` display this element's children in a flexible orientation.
- `grid` display elements children in a grid orientation.
#### Viewport
to make it good on phone and desktop.
include a meta tag in the head element of all your HTML pages. This tells the browser not to scale the page.
`<meta name="viewport" content="width=device-width,initial-scale=1" />`
#### Float
`float` moves an element to the left or right of its container element and allows inline elements to wrap around it. 
#### Media Queries
`@media` dynamically detects the size and orientation of the device and applies CSS rules to represent the structure of the HTML in a way that accomodates the change.
- tells us which side of the viewport is the longest.
@media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}
will rotate the screen 270degrees when the app is in portrait mode
@media (orientation: portrait) {
  aside {
    display: none;
  }
}
will not display asides when the viewport is in portrait mode
#### Grid
`grid` is useful when you want to display a group of child elements in a responsive grid
ex.
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
`grid-template-colums` lets us layout the columns here we repeatedly define each column to autofill the width of the parent with children that are resized to a min of 300px and a max of 1fr whic is a fractional unit of grid width or equal to the parent element split into equal parts for the children
figure out the other ig.
#### Flexbox
-useful when you want to partition your app into areas that responsively move around as the window resizes or the orientation changes.
- children inside of a flex display are given the `flex` property which tells the browser what proportion of the available space each child will get.
`flex-direction` can take on 4 values. default is row (left to right), then row-reverse (right to left) then column and column-reverse. These represent the main axis of ordering the flex children.
#### Design Layout
`text-align: center` can center your text horizontally  
`line-height: (insert 1/2height of element)` will center the text vertically  
`align-items: center` aligns items along the cross axis of the flex container; centers them  
`justify-content: center` aligns items along the main axis of the flex container; centers them.  
### Debugging CSS
use browser developer tools.
### CSS Frameworks
lots of code for repeatable layouts
- Tailwind
- Bootstrap - the most popular and successful and has come to define what the layout of a webpage should be. Integrate by referencing the CSS files from their content delivery network (CDN) 
### CSS Position
using position: value;
"static": This is the default value, and it means that the element is positioned according to the normal flow of the page.

"relative": This value positions the element relative to its normal position, without affecting the position of other elements on the page. IF you don't set "top, right, left, or bottom" the element will retain its normal position. Good to use with a child that has absolute position.

"absolute": This value positions the element relative to its closest POSITIONED ancestor (i.e., an ancestor with a position value other than "static"), or the containing block if there is no positioned ancestor. ( useful bc they are removed from the normal flow and can overlap other elements.)

"fixed": This value positions the element relative to the browser window, so it remains in the same position even if the page is scrolled.

Each of these values can be further adjusted with additional properties such as top, right, bottom, and left to specify the exact position of the element on the page.
### CSS Functions
#### Returning Functions
- The "min()" function in CSS returns the smaller of two or more comma-separated values.
#### Positioning Functions
- float moves an element to the left or right of its container element and allows inline elements to wrap around it. 
- gap: value - This property is specified as a value for <'row-gap'> followed optionally by a value for <'column-gap'>. If <'column-gap'> is omitted, it's set to the same value as <'row-gap'>. Used in grids. synonymous with grid-gap: value;
- margin: top right bottom left;
- top: value - moves the element a distance from the top of its container. takes % as well
- bottom: val - moves element up a distance from the bottom of its container, etc
- right
- left
- translateX() - moves an element horizontally on the 2D plane. It takes a distance value as a parameter, which can be specified in pixels (px), ems (em), or other length units, (IF YOU GIVE IT % IT MEANS A PERCENTAGE OF THE WIDTH OF THE ELEMENT)and indicates how far to move the element along the horizontal axis. Negative moves left, positive moves right; if you use a percent it refers to a percent of the element's own width and height; DOES NOT AFFECT STATIC ELEMENTS
- translateY() - same as X but vertical
- transform: translateX() translateY() - transform property allows you to apply a transformation to the element while keeping its position and layout within the document flow intact. transform allows you to act on static elements
- flex: flex-grow flex-basis; flex-grow defines how much the item will grow to fill around it. 1 means it will fill all available space. flex-basis is the value that says the intitial size of the flex item.
margin-top: val - sets the margin space on the top
margin-botton
margin-left
margin-right
margin: 50% - the margin will be 50% the width of its containing block.
#### Design Functions
- border-radius: 50% will make a circle; it gets complicated after that with all the values
- width: 100% - sets the width equal to the width of the parent element
### CSS Units and Definitions
80vmin - 80 percent of the viewport's smaller dimension  
px - pixels  
vh - viewport height  
vw -viewport width  
em - the font size of the parent element  
rem - the font size of the root element.  
root element - the highest level element in the document, usually the `<html>` tag  
content box - the element; default size of element;  
padding - the next out, clears an area around the content. The padding is transparent; default 0  
border- the edge; default 0  
margin- empty space between elements if you add it; default 0  
fr - only availabe in display: grid; means fraction of available space. 1fr means all of the available space. You can also combine them in rations so 1fr and 2fr would split the space into three parts and give 1 part to an element and 2 parts to another  

### Bootstrap stuff
- container-fluid - the container will span the entire width of the viewport.
- container - has a fixed left and right margin
## Javascript
include directly in the HTML file or use a separate file and the src parameter in HTML `<script>` element.
declare variable with `let` or `const`  
Null	The type of a variable that has not been assigned a value.  
Undefined	The type of a variable that has not been defined.  
Boolean	true or false.  
Number	A 64 bit signed number.  
BigInt	A number of arbitrary magnitude.  
String	A textual sequence of characters.  
Symbol	A unique value.  
Objects in JavaScript  
Object	A collection of properties represented by name value pairs. Values can be of any type.	{a:3, b:'fish'}  
Function	An object that has the ability to be called.	function a() {}  
Date	Calendar dates and times.	new Date('1995-12-17')  
Array	An ordered sequence of any type.	[3, 'fish']  
Map	A collection of key value pairs that support efficient lookups.	new Map()  
JSON	A lightweight data-interchange format used to share information across programs.	{"a":3, "b":"fish"}  
`===` is the equality variable in this language (does not do type conversion)  
`==` does type conversion and can do unexpected things  
strings can do concatenation and equality  
condition ? value if true : value if false  (the ternary operator - ?)  
same comparison for and an or as C++  
### Function
parameters can have default values  
Anonymous functions - functions assigned to a variable. these are very weird.   
```
const add = function (a, b) {
  return a + b;
};
```
Then you can call add as if it was the function name  
You can pass functions to other functions as parameters  
basically you can do anything to a function you can do to a variable and I don't like that at all  
Inner functions - functions can be declared within other functions. YUCK.  
Arrow functions - (optional parameters) => return statement (use brackets if you have more than one statment of executing code in your arrow function)   

### Loops
same for, while, do while
new loops:
`for in`
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}  note that for arrays the obj. name will output an index.
`for of`
The for of statement iterates over an iterable's (Array, Map, Set, ...) property values.

const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
### Array Functions
push	Add an item to the end of the array	a.push(4)  
pop	Remove an item from the end of the array	x = a.pop  
slice	Return a sub-array	a.slice(1,-1)  
sort	Run a function sort an array in place	a.sort((a,b) => b-a)  
values	Creates an iterator for use with a for of loop	for (i of a.values()) {...}  
find	Find the first item satisfied by a test function	a.find(i => i < 2)  
forEach	Run a function on each array item	a.forEach(console.log)  
reduce	Run a function to reduce each array item to a single item	a.reduce((a, c) => a + c)  
map	Run a function to map an array to a new array	a.map(i => i+i)  
filter	Run a function to remove items	a.filter(i => i%2)  
every	Run a function to test if all items match	a.every(i => i < 3)  
some	Run a function to test if any items match	a.some(i => 1 < 1)  
### Functions
console.log() - outputs string to console  
console.functionName() - does something with the developer console (not the screen)  
console.time()  
console.timeEnd() - wrap your code with these two functions to see how long it takes  
console.count() - to see how many times a block of code is called.  
```
function join(a, b) {
  return a + ' ' + b;
}
```
That is for writing your own functions  
end lines with ;  
`onclick` attribute in HTML is followed by a value that specificies what Javacode to call.  
When the some() method is called, it iterates through each element in the numbers array, and for each element, it calls the callback function with that element as the argument.  
Array.from(iterable object like a string) - turns it into an array;  
Math.floor() rounds a number down to the nearest int  
Math.random() generates a random number  
setTimeout(() => function to be executed after time, time to delay)  

### Objects and Classes and Inheritance
Function	Meaning
.entries	Returns an array of key value pairs
.keys	Returns an array of keys
.values	Returns an array of values
You can assign random properties to the object
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich

class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
You can make class functions and variables private by putting #before them.

Inheritance:

class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer

super lets you reference the parent function. extends is the way you define inheritance in Javascript
#### Objects
3 ways to make an object;
1) define an object literal
`object = {property: value, property: value, etc...}`
2) create an instance of Object
`let objectName = new Object();`
then you set the property's and values later.
ojectName.val = x
objectName.demon = bahamut
etc..
3) Use an Object Constructor;
function objectName(id, name, salary){
  this.id = id;
  this.name = name;
  this.salary = salary;
}
### JSON
JSON doc contains one of the following data types: string, bool, array, number, object, null
Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square braces and commas delimit arrays, and strings are always delimited with double quotes.
Converting to JavaScript
You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.

const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
Note that in this example, JSON cannot represent the JavaScript undefined object and so it gets dropped when converting from JavaScript to JSON.
JSON RULES
Data must be in key-value pair format. Each key-value pair should be separated by a comma (,).

The key and value should be separated by a colon (:).

All keys should be enclosed in double quotes (").

Strings should be enclosed in double quotes ("). Single quotes (') are not allowed.

Numbers can be integers or floats, and can be positive or negative.

The value can be a string, number, boolean (true or false), null, array, or object. Objects and arrays can be nested.

Nested objects and arrays should follow the same syntax rules as the top-level data.

JSON data should be enclosed in curly braces ({}) if it represents an object, or in square brackets ([]) if it represents an array.
### Regex
You can create a regular expression using the class constructor or a regular expression literal.

const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
The string class has several functions that accept regular expressions. This includes match, replace, search, and split. For a quick test to see if there is a match you can use the regular expression object's test function.

const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
### Rest and Spread
Rest- prefix a parameter with ... This will make the parameter take the REST of all the parameters. so if I only have two parameters, the last being a rest parameter and I provide 7 arguments, the first will go to the first and the last 6 will all be put in the rest parameter as an array. Rest must be on the last paramter.
Spread- the opposite of rest. you put the ... in the function call and it separates the array elements into parameters.
### Destructuring
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;
COMBINE REST SYNTAX
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
When destructuring objects, you need to explicitly specify the properties that you want to pull from the source object.
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
You can also put the values into new variables
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals
### Exceptions
function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed
the finally block just always runs after try even if there was no exception
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
#### Fallback
This is when you put a different version of the code in the catch block if an exception is thrown so that you can hopefully still get something you can work with. Ex. using local storage instead of a database because the connection failed.
### Scope
Javascript has 4 scopes for variables
Gobal - Visible to all code
Module - Visible to all code running in a module
Function - Visible within a function
Block - Visible within a block of code delimited by curly braces
The problem with var is that it ignores block scope
### This
- Global - When this is referenced outside a function or object it refers to the globalThis object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
- Function - When this is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running is JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
- Object - When this is referenced in a object it refers to the object.
### Closure
Functions have access to the variables of their immediate parent function.
### Modules
JavaScript modules allow for the partitioning and sharing of code. Initially JavaScript had no support for modules. Node.js, a server side JavaScript execution application, introduced the concept of modules in order to support the importing of packages of JavaScript from third party providers.

JavaScript got full module support with ES6, and they have become the standard module representation as browser support for JavaScript modules is now almost universal.

In order to differentiate between the two implementations, Node.js modules are called CommonJS modules, and JavaScript modules are called ES modules.

Because modules create a file based scope for the code they represent, you must explicitly export the objects that you want to be visible outside the module. For example, here is a simple module that exports a function that displays an alert.

alert.js

export function alertDisplay(msg) {
  alert(msg);
}
You can import the module's exported function into another module using the import keyword.

main.js

import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');
When you use CommonJS modules the Node.js runtime treats all JavaScript as if it were modules and so it works seamlessly. When you use ES modules in the browser, via HTML script references, things get a little more complicated. The key thing to understand is that modules can only be called from other modules. You cannot import a module object into a globally scoped JavaScript file.

From your HTML, you can differentiate that you are using a ES module by including the type of module in the script element. You can then import and use other modules and even make a module's object visible in the global scope. In the example below, we expose the alertDisplay imported function by attaching it to the global JavaScript window object so that it can then be called from the button onclick handler.

index.html

<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;
    </script>
    <button onclick="btnClick('called from index.html')">Press me</button>
  </body>
</html>
Fortunately, when you use a web framework bundler, discussed in later instruction, to generate your web application distribution code, you don't have to worry about differentiating between global Javascript files and JavaScript ES modules. The bundler will inject all the necessary syntax to connect your HTML to your modules. Historically, this was done by removing the modules and placing all of the JavaScript in a namespaced global partition. Now that ES Modules are supported on most browsers, the bundler will expose the ES module directly.
### DOM
You can provide a CSS selector to the querySelectorAll function in order to select elements from the document. The textContent property contains all of the element's text. You can even access a textual representation of an element's HTML content with the innerHTML property.
#### Creating a new element in the DOM
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
- to delete all elements call the removeChild function on the parent element.
Injection
-stuff about it being dangerous with .innerHTML
Event Listeners
All DOM elements support these
.addEventListener(stuff in here)
Event Category	Description
Clipboard	Cut, copied, pasted
Focus	An element gets focus
Keyboard	Keys are pressed
Mouse	Click events
Text selection	When text is selected
- you can add event listeners in html too
`<button onclick='alert("clicked")'>click me</button>`
### Promises
JavaScript executes as a single threaded application. That means there is only ever one piece of code executing at the same time. However, the fact that it does not execute concurrently does not mean that it does not execute in parallel. You can asynchronously execute code with the use of a JavaScript Promise. Because the execution is asynchronous the promise object can be in one of three states at any given point in time.

pending - Currently running asynchronously
fulfilled - Completed successfully
rejected - Failed to complete
You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs.

We can demonstrate asynchronous execution by using the standard JavaScript setTimeout function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running in parallel.

const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
Resolving and rejecting
Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to fulfilled when things complete correctly, or to rejected when an error happens. The promise executor function takes two functions as parameters, resolve and reject. Calling resolve sets the promise to the fulfilled state, and calling reject sets the promise to the rejected state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the pending state.

console.log(coinToss);
// OUTPUT: Promise {<pending>}
If you then wait ten seconds and the log the coinToss promise object again, the state will either show as fulfilled or rejected depending upon the way the coin landed.

console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
Then, catch, finally
With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: then, catch, and finally. The then function is called if the promise is fulfilled, catch is called if the promise is rejected, and finally is always called after all the processing is completed.

We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either heads or tails.

const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
We then chain the then, catch and finally functions to the coinToss object in order to handle each of the possible results.

coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
The observer pattern
Promises are the standard way to do asynchronous processing in JavaScript, but they are not the only way. The Observer pattern, popularized by web programming frameworks such as Angular, use a model called Observer. The major difference between Observers and Promises is that Promises immediately begin to execute when the Promise is created, but Observers form a pipeline that you then pass an execution object into. This allows Observers to be reused, and the result of executing an Observable to be saved as a history of a particular execution.
### Async/Await
JavaScript Promise objects are great for asynchronous execution, but as developers began build large systems with promises they started wanting a more concise representation. This was provided with the introduction of the async/await syntax. The await keyword wraps the execution of a promise and removed the need to chain functions. The await expression will block until the promise state moves to fulfilled, or throws an exception if the state moves to rejected. For example, if we have a function that returns a coin toss promise.

const coinToss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
      } else {
        reject('fell off table');
      }
    }, 1000);
  });
};
We can create equivalent executions with either a promise then/catch chain, or an await with a try/catch block.

then/catch chain version

coinToss()
  .then((result) => console.log(`Toss result ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => console.log(`Toss completed`));
async, try/catch version

try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
async
One important restriction for working with await is that you cannot call await unless it is called at the top level of the JavaScript, or is in a function that is defined with the async keyword. Applying the async keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function. Basically this turns any function into an asynchronous function, so that it can in turn make asynchronous requests.

This can be demonstrated with a function that makes animal noises. Notice that the return value is a simple string.

function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: moo
If we designate the function to be asynchronous then the return value becomes a promise that is immediately resolved and has a value that is the return value of the function.

async function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: Promise {<fulfilled>: 'moo'}
We then change the cow function to explicitly create a promise instead of the automatically generated promise that the await keyword generates.

async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
// OUTPUT: Promise {<pending>}
You can see that the promise is in the pending state because the promise's execution function has not yet resolved.

await
The async keyword declares that a function returns a promise. The await keyword wraps a call to the async function, blocks execution until the promise has resolved, and then returns the result of the promise.

We can demonstrate await in action with the cow promise from above. If we log the output from invoking cow then we see that the return value is a promise. However, if we prefix the call to the function with the await keyword, execution will stop until the promise has resolved, at which point the result of the promise is returned instead of the actual promise object.

console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
By combining async, to define functions that return promises, with await, to wait on the promise, you can create code that is asynchronous, but still maintains the flow of the code without explicitly using callbacks.

Putting it all together
You can see the benefit for async/await clearly by considering a case where multiple promises are required. For example, when calling the fetch web API on an endpoint that returns JSON, you would need to resolve two promises. One for the network call, and one for converting the result to JSON. A promise implementation would look like the following.

const httpPromise = fetch('https://simon.cs260.click/api/user/me');
const jsonPromise = httpPromise.then((r) => r.json());
jsonPromise.then((j) => console.log(j));
console.log('done');

// OUTPUT: done
// OUTPUT: {email: 'bud@mail.com', authenticated: true}
With async/await, you can clarify the code intent by hiding the promise syntax, and also make the execution block until the promise is resolved.

const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
const jsonResponse = await httpResponse.json();
console.log(jsonResponse));
console.log('done');

// OUTPUT: {email: 'bud@mail.com', authenticated: true}
// OUTPUT: done
### Debugging
One of the simplest ways to debug your JavaScript code is to insert console.log functions that output the state of the code as it executes. For example, we can create a simple web application that has an HTML and JavaScript file that demonstrates the difference between let and var. By inserting console.log statements into the code, we can see what the value of each variable is as the code executes.

index.html

<body>
  <h1>Debugging</h1>
  <script src="index.js"></script>
</body>
index.js

var varCount = 20;
let letCount = 20;

console.log('Initial - var: %d, let: %d', varCount, letCount);

for (var varCount = 1; varCount < 2; varCount++) {
  for (let letCount = 1; letCount < 2; letCount++) {
    console.log('Loop - var: %d, let: %d', varCount, letCount);
  }
}

const h1El = document.querySelector('h1');
h1El.textContent = `Result - var:${varCount}, let:${letCount}`;
console.log('Final - var: %d, let: %d', varCount, letCount);
Take the following steps to see the result of console debugging.

Create the above files in a test directory named testConsole
Open the testConsole directory in VS Code
Run index.html using the VS Code Live Server extension
Open the Chrome browser debugger (press F12)
Select the Console tab
Refresh the browser
You should see the following result.

JavaScript console debugging

You can use the debugger console window to inspect variables without using the console.log function from your code. For example, if you type varCount in the console window it will print out the current value of varCount. You can also execute JavaScript directly in the console window. For example, if you type varCount = 50 and press Enter it will change the current value of varCount.

JavaScript console debugging variables

Browser debugging
Console.log debugging is great for times when you just need to quickly see what is going on in your code, but to really understand the code as it executes you want to use the full capabilities of the browser's debugger.

Using the same setup we used for console.log debugging, open up Chrome's browser debugger, but this time select the source tab. This will display the source files that comprise the currently rendered content.

JavaScript source debugging

You can either select index.js from the source view on the left, or press CTRL-P (on Windows) or ⌘-P (on Mac) and then select index.js from the list that pops up. Then set a breakpoint on line 4 by clicking on the line number on the left of the displayed source code. This makes it so that the execution of code will pause whenever that line is executed. Refreshing the browser window will cause index.js to reload and pause on the breakpoint.

JavaScript breakpoint

With the browser paused in the debugger you can move your mouse cursor over a variable to see its value, see what variables are in scope, set watches on variables, or use the console to interact with the code.

This gives you complete control to inspect what the JavaScript code is doing and experiment with possible alternative directions for the code. Take some time to poke around in the debugger. Learning how to exploit its functionality will make you a much better web developer.
### NodeList/querySelectorAll
When you use the querySelectorAll method, it returns a NodeList containing all the elements that match the specified selector. A NodeList is a collection of nodes (elements, text nodes, or other types of nodes) that can be accessed using array-like syntax, using an index to retrieve a specific element from the list.

However, a NodeList is not exactly the same as an array. It does not have all the same methods as an array, such as map, reduce, or filter. It also does not have all the same properties, such as length. For example, if you try to access the length property of a NodeList, you will get a number, but it may not be the same as the actual number of elements in the list.

That being said, many of the methods that work on arrays can also be used on NodeLists by converting them to arrays using the Array.from method or the spread operator (...). For example, you can convert a NodeList to an array like this:
### Export data to URL from page
    const currentPlant = plants[plantIndex];
    const PlantString = JSON.stringify(currentPlant);
    const encodedPlant = encodeURIComponent(PlantString);
    window.location.href = 'garden.html?plant=${encodedPlant}';
## Startup Queries
- can I turn my addplant image into buttons so the mouse changes over them?
- what is the importance of index.html?
- how to center in the grid boxes?
- add more plants to website.
## Test Review
padding puts space around content of selected elements
pals before marriage (padd, border, margin);
CNAME points DNS to another DNS
A points to IP address
JSON must have "" around the key and value must never be undefined.
a.filter() -
The filter() function in JavaScript is used to create a new array with all elements that pass a certain test implemented by the provided callback function.

The filter() method creates a new array by filtering out the elements that do not pass the specified condition(s). It takes a callback function as its argument, which is executed for each element of the array. The callback function takes three arguments:

currentValue (required) - the value of the current element being processed
index (optional) - the index of the current element being processed
array (optional) - the array object that the filter() method was called upon
The callback function should return a boolean value. If the function returns true, the current element will be added to the new array. If the function returns false, the current element will be skipped.

v.match() - takes a regular expression and chooses values in the array that match
The match() function in JavaScript is used to search for a specified pattern in a string and returns the matched string or an array of matched strings.

The match() method takes one argument, which is the regular expression pattern to search for. The pattern can be a string or a regular expression object. The method returns an array containing the matched string or an empty array if no match is found.

a.reduce() - takes an array and reduces it to one value
The reduce() method takes two arguments: a callback function and an initial value for the accumulator. The callback function takes four arguments: the accumulator, the current element, the current index, and the array itself. The function returns the updated value of the accumulator after processing the current element.
WHEN THE FUNCTION IS JUST TWO PARAMETERS IT IS THE ACCUMULATOR AND THE CURRENT ELEMENT;

/A|f/i A or f case insensitive

CSS font loading from google @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@700&display=swap');
.map() - takes array and makes it an array of stuff with different values;
when javascript console.logs an array, it puts '' around strings.
subdomain is the whole thing cs260.cs.byu.edu
for arrow functions {++y} is undefined but ++y returns an incremented y value. If it's one line you do not need a return value.
Javascript objects do not need quotes around the strings in the keys.
chmod +x deploy.sh - 
chmod takes options and a mode modifier and then a file to be granted access
chmod [options] mode filename;
common option values;

-R: Recursively change the permissions of all files and directories within the specified directory.
-v: Print a message for each file or directory that is modified.
-c: Print a message only for files or directories whose permissions are actually changed.

Some common values for the mode argument include:

u: Sets the permissions for the file owner.  
g: Sets the permissions for the group owner.  
o: Sets the permissions for everyone else.  
r: Gives read permission.  
w: Gives write permission.  
x: Gives execute permission.  


sudo deploy.sh //doesn't make any sense
ls -la deploy.sh
ssh deploy.sh //doesn't make any sense



#### startup
startup assignment cs260 W23
 
Pitch: 
You've seen people with unconventional pets on TV. Some have monkeys, others lions and tigers. Now, it's your turn! Through this application, you can adopt your own virtual pets and watch them interact with your friends' pets too! You will be able to choose the species of your new pet, name them, and even accessorize them. All pets that you create will be saved under your account so you can keep track of your adorable critters. 

[MODEL](https://github.com/hajjiinnn/startup/blob/main/Untitled_Artwork.pdf)

Key features include:
-secure login via HTTPS
-ability to choose, name, and accessorize pet
-ability to see pets in their habitat
-ability to edit pets in your account
