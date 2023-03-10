# NOTES

## Research further: 
- [ ] console commands
- [ ] git ignore files
- [ ] what chmod stands for


## Random things: 

### SSH into your server
`➜  ssh -i [key pair file] ubuntu@[ip address or your domain name]`
`exit` to exit the shell

### chmod commands
Order: User, Group, Everyone  

| Numbers |  Notation |  Permissions  | 
| ------- | --------- | ------------- | 
|    0    |    ---    |     None      | 
|    1    |    --x    |    Execute    |  
|    2    |    -w-    |     Write     |  
|    3    |    -wx    | Write/Execute | 
|    4    |    r--    |      Read     | 
|    5    |    r-x    | Read/Execute  |  
|    6    |    rw-    |   Read/Write  |  
|    7    |    rwx    |Read/Write/Exec| 

### Keyboard shortcut to select multiple lines to edit in VS Code
`alt` and select

# The Console

📖 **Deeper dive reading**: [MDN Command line crash course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)

## Common commands
- **pwd** - Check present working directory
- **echo** - Output the parameters of the command
- **cd** - Change directory
- **mkdir** - Make directory
- **rmdir** - Remove directory
- **rm** - Remove file(s)
- **mv** - Move file(s)
- **cp** - Copy files
- **ls** - List files
- **ls -la** - List all files in long format (hidden ones that start with .)
- **curl** - Command line client URL browser
- **grep** - Regular expression search
- **find** - Find files
- **top** - View running processes with CPU and memory usage
- **df** - View disk statistics
- **cat** - Output the contents of a file
- **less** - Interactively output the contents of a file
- **wc** - Count the words in a file
- **ps** - View the currently running processes
- **kill** - Kill a currently running process
- **sudo** - Execute a command as a super user (admin)
- **ssh** - Create a secure shell on a remote computer
- **scp** - Securely copy files to a remote computer
- **history** - Show the history of commands
- **ping** - Check if a website is up
- **tracert** - Trace the connections to a website
- **dig** - Show the DNS information for a domain
- **man** - Look up a command in the manual
- **touch** - Creates a new empty file in the current directory (or update the timestamp if it does exist)

You can also chain the input and output of commands using special characters

- `|` - Take the output from the command on the left and _pipe_, or pass, it to the command on the right
- `>` - Redirect output to a file. Overwrites the file if it exists
- `>>` - Redirect output to a file. Appends if the file exists

For example, you can list the files in a directory, pipe it into `grep` to search for files created in Nov, and then pipe that into `wc` to count the number of files found with a date of Nov.

```
ls -l | grep ' Nov ' | wc -l
```

There are also keystrokes that have special meaning in the console.

- `CTRL-R` - Use type ahead to find previous commands
- `CTRL-C` - Kill the currently running command

# Git

## Git Commands

Check your git version
```sh
➜  git --version
```
Initialize a directory  
```sh
➜  mkdir playingWithGit
➜  cd playingWithGit
➜  git init
```

If you list all files in the directory you will see that you now have a hidden directory named `.git`. This is where all versions get stored.

```sh
➜  ls -la
total 0
drwxr-xr-x   3 lee  staff    96 Dec  1 22:59 .
drwxr-xr-x+ 54 lee  staff  1728 Dec  1 23:00 ..
drwxr-xr-x   9 lee  staff   288 Dec  1 22:59 .git
```

Now use the `echo` command to create a file so that we can see how versioning works. After creating the new file, use `git status` to tell you what git is doing.

```sh
➜ echo hello world > hello.txt
➜ git status

On branch master
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	hello.txt

nothing added to commit but untracked files present (use "git add" to track)
```

Git status tells you that it detects a new file named `hello.txt`, but it isn't currently tracking versions for that file. To begin tracking versions you need to add it. Usually you track all files in a repository directory and so you can tell Git to track everything that it doesn't know about with `git add .`. Follow this with another call to `git status`.

```sh
➜  git add .
➜  git status

On branch master
No commits yet
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   hello.txt
```

Now Git tells us that it has `staged` the file `hello.txt` and it is ready to be committed as a version in the repository. We commit a version with the `commit` command. We always want to have a meaningful comment about the version we are committing and so we use the `-m` parameter to provide a message that will live with the version. Follow this with another call to `git status`.

```sh
➜  git commit -m "initial draft"
[master (root-commit) d43b07b] initial draft
 1 file changed, 1 insertion(+)
 create mode 100644 hello.txt

➜  git status
On branch master
nothing to commit, working tree clean
```

Congratulations! You have just committed your first file to a Git repository. Also, note that the point of the stage (add) step, is so that you can commit some files while still leaving other modified file out of the commit.

Let's make an edit to our file and commit it again. This time we will tell Git that we want to add all the tracked modified files to our commit by including the `-a` parameter along with our message parameter.

```sh
➜  echo goodbye world > hello.txt

➜  git commit -am "changed greeting to reflect the present mood"

[master e65f983] changed greeting to reflect the present mood
 1 file changed, 1 insertion(+), 1 deletion(-)
```

view the versions with the `git log` command.

```sh
➜  git log

commit e65f9833ca8ee366d0d9c1676a91b1a977dab441 (HEAD -> master)
Author: Lee
Date:   Thu Dec 1 23:32:22 2022 -0700

    changed greeting to reflect the present mood

commit d43b07b8890f52defb31507211ba78785bf6dccf
Author: Lee
Date:   Thu Dec 1 23:29:11 2022 -0700

    initial draft
```

This shows both commits with the associated comments.

## Commit SHA

Every commit has a unique identifier that is generated by hashing the file along with the timestamp using the SHA hashing algorithm. You can always refer to a specific commit in your version history by using its SHA. For example, if we want to temporarily switch back to a previous version to see what it contains we can use the `checkout` command. You only need to provide the first few characters of the SHA.

```sh
➜  git checkout d43b07b8890f

Note: switching to 'd43b07b8890f'.
HEAD is now at d43b07b initial draft

➜  cat hello.txt
hello world
```

The above output omits a big message saying that you are no longer looking at the latest version, but the important thing is that you can see that we are now looking at our old version. To get back to the top of the version chain, use the `checkout` command and reference the branch name, which is by default `master`.

```sh
➜  git checkout master
Previous HEAD position was d43b07b initial draft
Switched to branch 'master'

➜  cat hello.txt
goodbye world
```

Now we are back to our latest version.  

A commit is a full snapshot of what was staged from your directory at the time of the commit. That means all of the files contained in the commit were reverted when you executed the checkout command. Since we only had one file in our commit, it looks like we are only flipping that file around, but basically you can think of it as a time machine for the entire directory.

## Diff

Most of the time you don't want to reverse back to an earlier commit. Instead you just want to compare the differences between commits. We can do that with the `diff` command. You can specify two SHAs that you would like to compare, or you can use the HEAD variable which points to the top of the commit change. To refer to earlier commits you just add `~` and the numerical distance from head that you want to reference. In this case we will compare HEAD and HEAD~1.

```sh
➜  git diff HEAD HEAD~1
```

```diff
diff --git a/hello.txt b/hello.txt
index 3b18e51..eeee2af 100644
--- a/hello.txt
+++ b/hello.txt
@@ -1 +1 @@
-hello world
+goodbye world
```

You can see that we made a change to `hello.txt` by removing `hello world` and adding `goodbye world`.

## Branches

Git supports the ability to branch your code. This allows you to work on variations of the code while still allowing progress on the main branch. For example, if you wanted to work on a new feature named `A` without interrupting work on the master branch, you would use the `git branch A` command and start working on the `A` branch with the `git checkout A` command. Now commits can be down to both the master and the `A` branch. When you want to combine the work done on both branches you us checkout the master branch and execute `git merge A`. If you decide you want to abandon the new feature then you just don't ever merge it back into the master branch.

Here is a demonstration of this working on the visualization tool provided by [git-school.github.io](https://git-school.github.io/visualizing-git/).


## Binary files

You can store any type of file in Git, but be aware that if you store large binary files, such as images or videos, you are storing a copy of that file each time you make a change to it. For example, suppose you use Git to track the changes you make to a video production project. Every time you save a change to your 10 GB video file you store a complete copy of the file. That means 10 commits of the video file will store 100 GB of data in your repository.

# GitHub

- [GitHub personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Making changes

Now that there is a commit that GitHub has that you do not have in your development environment. If we run the `fetch` Git command, you will get the latest information about the changes on GitHub without actually changing your local repository. We then run the `status` Git command to see the differences between the clones and see that we are missing a commit. You can pull it down using the `pull` Git command. 

```sh
➜  git fetch
➜  git status
Your branch is behind 'origin/main' by 1 commit, and can be fast-forwarded.
  (use "git pull" to update your local branch)

➜  git pull
Updating d13a9ce..cafe81a
Fast-forward
 README.md | 4 +++-
 1 file changed, 3 insertions(+), 1 deletion(-)
```

After running the pull command, your development clone and the GitHub clone are now the same.

## Handling merge conflicts

By pushing and pulling often, everyone keeps an up to date copy of the repository. This is important so that you don't run into merging problems caused by two peers modifying the exact same code. Merging only becomes something you have to deal with when two people modify the exact same line of code. However, when you have two peers working together you are always going to have a merge conflict at some point in time and so let's discuss how to handle this.

We can simulate a merge conflict by editing a line in a file and committing the file in your development environment, and before pushing that change, modifying the same line using GitHub. Now, run `fetch` and `status` again in your console.

```sh
➜  git fetch
➜  git status
Your branch and 'origin/main' have diverged,
and have 1 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)
```

This shows that the cloned repositories have diverged from each other. Normally this is fine and we can just push and pull the different commits, but if we do that this time we will get an error because the exact same line was changed in the two different commits.

```sh
➜  git pull

Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.
```

We now need to resolve the merge conflict that it says has happened with our `README.md` file. If you are using VS Code with the GitLens extension installed it will visually walk you through this process. However, so you can understand what is going on, we will do this using the console. The first step is to open up `README.md` in an editor. You will see that git has injected lines that highlight where the conflict is. Both your local change and the change made on GitHub are included.

```diff
An example start up application

Change from my development environment!

Change from GitHub

<<<<<<< HEAD
Conflict change made in development environment
=======
Conflict change made in GitHub
>>>>>>> b9f4c53c91eff509993d7291e60148f903827de0
```

We resolve the conflict by modifying the file to remove the textual conflict delimiters and modifying the file to keep the changes we want. When we are done editing, our file contains what we want from both commits.

```md
# startup-example

An example start up application

Change from my development environment and from GitHub
```

Now that the conflict is resolved we commit our resolution and push up the result.

```sh
➜  git commit -am "merge(notes) combined both edits"
➜  git push
```

If you go look at the file again on GitHub you will see the additional commit in the history and the result of our merge in the file content.

## Forks

 A fork is similar to cloning a repository to your development environment, but it clones to GitHub instead. Then pull the fork down to your development environment to work on it. The fork maintains a link to the upstream (original) repository that allows you to easily pull down updates and merge them with your fork. A fork also allows you to create a pull request in order to push suggested changes to the original repository.

## Pull requests

GitHub allows you to create a fork of any repository on GitHub. You just push the `fork` button from the repository's GitHub page. You can then make modifications to the repository fork and push the changes as a pull request. This notifies the original repository's owner that a request is being made to enhance the original repository. The owner can review your changes and if appropriate commit the changes into the original. This is how open source communities manage development from a volunteer group of global developers.


# Domain names

Domain names are broken up into a root domain, with one or more possible subdomain prefixes. The root domain is represented by a secondary level domain and a top level domain. The top level domain (TLD) represent things like `com`, `edu`, or `click`. So a root domain would look something like `google.com`, or `cs260.click`. The [possible list of TLDs](https://www.icann.org/resources/pages/tlds-2012-02-25-en) is controlled by ICANN, one of the governing boards of the internet.

You can get information about a domain name from the domain name registry using the `whois` console utility.

```yaml
➜  whois byu.edu

Domain Name: BYU.EDU

Registrant:
	Brigham Young University
	3009 ITB
	2027 ITB
	Provo, UT 84602
	USA

Administrative Contact:
	Mark Longhurst
	Brigham Young University
	Office of Information Technology
	1208 ITB
	Provo, UT 84602
	USA
	+1.8014220488
	markl@byu.edu

Technical Contact:
	Brent Goodman
	Brigham Young University
	Office of Information Technology
	1203J ITB
	Provo, UT 84602
	USA
	+1.8014227782
	dnsmaster@byu.edu

Domain record activated:    19-Jan-1987
Domain record last updated: 11-Jul-2022
Domain expires:             31-Jul-2025
```

## DNS

Every DNS server in the world references a few special DNS servers that are considered the `authoritative name servers` for associating a domain name with an IP address.

The DNS database records that facilitate the mapping of domain names to IP addresses come in several flavors. The main ones we are concerned with are the `address` (`A`) and the `canonical name` (`CNAME`) records. An `A` record is a straight mapping from a domain name to IP address. A `CNAME` record maps one domain name to another domain name. This acts as a domain name alias. You would use a CNAME to do things like map `byu.com` to the same IP address as `byu.edu` so that either one could be used.

When you enter a domain name into a browser, the browser first checks to see if it has the name already in its cache of names. If it does not, it contacts a DNS server and gets the IP address. The DNS server also keeps a cache of names. If the domain name is not in the cache, it will request the name from an `authoritative name server`. If the authority does not know the name then you get an unknown domain name error. If the process does resolve, then the browser makes the HTTP connection to the associated IP address.

As you can see, there is a lot of levels of name caching. This is done for performance reasons, but it also can be frustrating when you are trying to update the information associated with your domain name. This is where the `time to live` (`TTL`) setting for a domain record comes into play. You can set this to be something short like 5 minutes or as long as several days. The different caching layers should then honor the TTL and clear their cache after the requested period has passed.

### Additional DNS Record Types

The additional NS and SOA type records that were listed for your domain name are important for working with DNS. These records were created automatically for you when you registered your domain name. The name server (NS) record contains the names of the authoritative name servers that authorize you to place DNS records in this DNS server. Those same authoritative name servers are listed with the registrar that you leased your domain name from. That way the authoritative name server can verify that the DNS records and the DNS registration match and are authorized to represent the domain name when defining DNS records. Otherwise a hacker could just add DNS records and take over your domain name.

The start of authority (SOA) record provides contact information about the owner of this domain name.

# Caddy (from the HTTPS, TLS, and web certs file)

## Adding/Editing Service Subdomains

1. ssh into your production environment server
`➜  ssh -i [key pair file] ubuntu@[ip address or your domain name]`
2. Edit Caddy's configuration (`Caddyfile`) file (in ubuntu user's home directory). Because this file is not owned by the root user, gonna have to sudo into it
```
➜ cd ~
➜ sudo vi Caddyfile
```
3. Modify the rule for handling requests to port 80 (HTTP) to handle requests for your domain name. Not specifying a port makes the rule serve up files using port 443 (HTTPS)/any requrest to port 80 will redirect the browser to port 443.  
Replace `:80` with your domain name (making sure to remove the colon).
4. Modify the rules to make sure traffic is being routed to the desired subdomains  
5. Save the file and exit VI `:wq`
6. Restart Caddy so that your changes take effect. 
`sudo service caddy restart` 


















# Hypertext Markup Language

- [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3C specification](https://html.spec.whatwg.org/multipage/) - This official specification is only for reference

## Elements and tags

Each of these elements may contain other elements that provide the structure of our web page. The `html` element represents the top level page structure. The `head` element contains metadata about the page and the page title. The `body` element represents the content structure. The `main` element represents the main content structure, as opposed to things like headers, footers, asides, and navigation content. These additional elements result in the following HTML page.

```html
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
## Attributes

Every HTML element may have attributes. Attributes describe the specific details of the element. For example, the `id` attribute gives a unique ID to the element so that you can distinguish it from other elements. The `class` attribute is another common element attribute that designates the element as being classified into a named group of elements. Attributes are written inside the element tag with a name followed by an optional value. You can use either single quotes (`'`) or double quotes (`"`) to delimit attribute values.

```html
<p id="hello" class="greeting">Hello world</p>
```

## Hyperlinks

One of the core features that made the web so successful was the ability to create hyperlinks that take you from one page to another another with a simple click. A hyperlink in HTML is represented with an anchor (`a`) element that has an attribute containing the address of the hyperlink reference (`href`). A hyperlink to BYU's home page looks like this:

```html
<a href="https://byu.edu">Go to the Y</a>
```

## Common elements

Modern HTML contains over 100 different elements. Here is a short list of HTML elements that you will commonly see.

| element   | meaning                                                                |
| --------- | ---------------------------------------------------------------------- |
| `html`    | The page container                                                     |
| `head`    | Header information                                                     |
| `title`   | Title of the page                                                      |
| `meta`    | Metadata for the page such as character set or viewport settings       |
| `script`  | JavaScript reference. Either a external reference, or inline           |
| `include` | External content reference                                             |
| `body`    | The entire content body of the page                                    |
| `header`  | Header of the main content                                             |
| `footer`  | Footer of the main content                                             |
| `nav`     | Navigational inputs                                                    |
| `main`    | Main content of the page                                               |
| `section` | A section of the main content                                          |
| `aside`   | Aside content from the main content                                    |
| `div`     | A block division of content                                            |
| `span`    | An inline span of content                                              |
| `h<1-9>`  | Text heading. From h1, the highest level, down to h9, the lowest level |
| `p`       | A paragraph of text                                                    |
| `b`       | Bring attention                                                        |
| `table`   | Table                                                                  |
| `tr`      | Table row                                                              |
| `th`      | Table header                                                           |
| `td`      | Table data                                                             |
| `ol,ul`   | Ordered or unordered list                                              |
| `li`      | List item                                                              |
| `a`       | Anchor the text to a hyperlink                                         |
| `img`     | Graphical image reference                                              |
| `dialog`  | Interactive component such as a confirmation                           |
| `form`    | A collection of user input                                             |
| `input`   | User input field                                                       |
| `audio`   | Audio content                                                          |
| `video`   | Video content                                                          |
| `svg`     | Scalable vector graphic content                                        |
| `iframe`  | Inline frame of another HTML page                                      |

## Comments

You can include comments in your HTML files by starting the comment with `<!--` and ending it with `-->`. Any text withing a comment block will be completely ignored when the browser renders it.

```html
<!-- commented text -->
```

## Special characters

HTML uses several reserved characters for defining its file format. If you want to use those characters in your content then you need to escape them using the `entity` syntax. For example, to display a less than symbol (`<`) you would instead use the less than entity (`&lt;`). You can also use the entity syntax to represent any unicode character.

| Character | Entity      |
| --------- | ----------- |
| &amp;     | `&amp;`     |
| <         | `&lt;`      |
| >         | `&gt;`      |
| "         | `&quot;`    |
| '         | `&apos;`    |
| &#128512; | `&#128512;` |

















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
if there were curly braces it would return `undefined` because you didn't specify to return    

Q22:  Which of the folling is a valid JavaScript object?   {n:1}  
` {"n" = "1"}     {n:1}     {n=1}     {"n"=1}`  
no `=` in js with key value pairs  
JSON requires double quotes, Javascript doesn't  

Q23:  The following console command makes a script executable:   chmod +x deploy.sh  
chmod +x allows executalbe permission
sudo stands for "substitue user do" or "super user do"; allows you to temporarily elevate your current user account to have root privileges  
ls lists contents of current directory  
ssh (secure shell) provides a secure encrypted connection between two hosts over an insecure network  




























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


## Test Review
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
