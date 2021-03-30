Please click this link to see the actual Google Colab: <br/>
https://colab.research.google.com/drive/1c6-tahKwTqxG8aOacnQ9Y-Bd8VHUrYYU?usp=sharing#scrollTo=1vQ5t2NvXspL <br/>
<br/>
Or if you want to see the research paper, click on this: https://github.com/slampham/10x-Dev/blob/main/Final_Report.pdf

# Project Description
This research project I did with my professor had to be one of my most favorite projects I've ever worked on. We did research to find what differentiates an elite developer (or 10x developer) from an average developer, such as their habits and coding styles.

# Planning
This project slightly scared me just because there was no real problem and solution. It's not like leetcode where you given a prompt, expected to write some code, and get the correct solution. It's not even like building a product for a company. Usually you at least have some general expectations, designs, and client feedback to guide you on what you need to build. And, you know what the product should generally look like at the end. However, this project, I was given a prompt that is ambiguous by nature. By what metrics do you even differentiate 10x developers from average ones? How would you measure those metrics? Where would you get them? 

My professor did give me some guidance when I had meetings with him. For example, he told me me about a dataset called **GHTorrent** that contains all types of information about GitHub users, archiving every single fact and user. It contained commits, projects, users, issues, stars, followers, and other important facts that I used in my research. He also told me to consider if code created from an 10x developer is different from the normal developer and informed me about code complexity. If you're not aware, code complexity is an actual research topic in CS. First of all, I didn't even realized that code complexity was a thing. I did my research and some code can be more complex than others based on what factors are measured. One obvious example is the number of lines of code. Another is the number of conditionals: `if / else`. There are some factors that researchers disagree on, but in general, code can be numerically more complex than others based on what code metric you use. 

With this, I found this library called **Radon**, which is able to tell you if code is more complex, and by what factors. However, I saw that Radon can only analyze **Python** code, not any other language. I thought this would've been a *huge* problem because I would be creating a lot of bias in choosing a certain language. However, my professor told me it was perfectly fine because the Python community was still huge. I just needed to specify I'm only comparing with that language when I publish research on it. 

Finally I realized that I could use **BigQuery** in order to do any SQL queries that I need to do. At first, I thought I would need to download all the data locally and mess with them myself. However, I saw that **GHTorrent** dataset was already on on **BigQuery**. This was extremely convinent because I've been dabbling with **BigQuery** previously and had experience with it.

# Metrics
So it seems I have all the resources I need to begin. However, the final question left is who is even considered a 10x developer. At first, I thought maybe I should go by the number of followers they had on GitHub. However, I quickly saw that this was a bad metric because a lot of "popular" developers, ones that have huge social followings, tend to have lots of followers. They aren't necessarily the most expert developers, and they only got their followers from their YouTube channels (ex: Siraj Raval). I tried another metric, using the number of times a user got starred, and this too led to a popularity contest. Finally, I found a metric that worked best. I decided to accumulate all the stars that a user has from *each* repo they had. This was an excellent indicator of a 10x developer because when a user stars a repo, it typically means they enjoyed it or that it was at least a good resource. For example, Kenneth Reitz ended up being the top starred Python user because he's contributed to many Python repos that are used in the community (ex: `requests, pipenv, requests-html`). I skimmed through the top users, and almost all deserved to be there.

# Initial Attempts
So I set off trying to do the project. I had no idea where to even begin. Before this project, I didn't even know how to use SQL! So I had no idea how I was suppose to query all the Python users on GHTorrent and accumulate their different star counts. Instead, I improvised and found a website that contained the top Python users by stars. I then webscraped the users and their count using **BeautifulSoup**. This was all and well, but I found out that I *still* needed to get the normal developers and their facts from GHTorrent. So I learned SQL on my own and gathered all the Python users on GHTorrent.

# Problems... and Lots of Them

## Loading Times
However, I saw that there was immediate problems. One is that web scraping off a website took **forever**. Every time I tried to webscrape 1000 top developers off the website, it took almost a minute. This took far too long so I had to serialize the data so I can just load it.

## Bad Sampling
Another problem is that trying to do an analysis between the top 1000 developers is not good enough. Ideally, we want to have a sample of all different types of developers, such as the top 10% or top 25%. So I had to totally scrap the entire web scraping method. Instead I learned how to use SQL by myself to learn find the star count of *any* developer. This took forever to learn because I had to grab the star counts of every repo, find out if they're in Python, and link them back to the same user.

## Resource Management
Another problem that I quickly noticed was that I was trying to query literally over a 1 TB of data on BigQuery (100,000s of commits, commit messages, users, etc.). I quickly hit my limited number of queries I can make. Instead, I had to drop pieces of data that were irrelevant, such as location (longitude, latitude).

I also hit my API limit on GitHub. I saw that when I tried to search for every Python repo from a user, it would take roughly ~50 calls. I had to authenticate my account so that I can reach the higher 5000 API call limit. Even then, I manually waited every hour so I can sample more users. In total, I was only able to do 100 users / hour.

## Version mismatch
Finally, another bug I spent days debugging was with Radon. Whenever I ran several repos through Radon, I would frequently get a bug or issue. I found out it was because Radon doesn't work with Python 2! So I had to add another step when I was count star counts, which was to skip Python 2 repos. 

## Bad Data
Some of the data on GHTorrent was outdated. There were some users who didn't exist. Some projects didnt exist. Sometimes you couldn't find the repos of a certain user because they deleted it! I essentially had to check for bad data every step in the process. Some users were actually organizations.

# Results
I found out that identifying issues and resolving them were the biggest signs of a 10x developer. For example, the top 0.1% had a nearly 5000% increase in the number of issues events they have (creating, assigning, closing, etc.). Pull requests were huge also, with 3000%. I hypothesized that it was because great repos constantly have issues being identified, with lots of pull requests to resolve those issues. Surprisingly, the number of commits didn't matter at much at 2000%. Projects owned was even lower at 350%. This indicates that code output isn't as important as making all repos removed of issues.

# What can be improved
Sadly when I was comparing the code with 10x developers vs normal ones, the code complexities and number of comments seemed to roughly equal. It's likely because a lot of Python repos reuse the same Python libraries, so Radon cannot properly examine it. In the future, I may try to handpick these samples.

# What I learned
I learned so much from this project. I learned how to use BigQuery, API's, webscraping, resource management, data handling, and statistics. I also realized that I shouldn't just go into a project haphazardly without at least planning it beforehand. If I'm going to be working with literal TB's of data, then there should be structure to how you do something. I can spend forever going on about the bugs and details, but this was the largest endeavor I ever took. Yet it was also the funnest one.
