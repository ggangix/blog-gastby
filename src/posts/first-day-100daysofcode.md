---
title: 1/100 days of code - Creating a blog with Gatsby and Tailwind
author: Giuseppe Gangi
date: 2020-11-15 18:15:00+01:00
---

Hello there, this is my first day of 100 on the challenge to spend at least 1 hour a day to code personal projects.

# Quick Introduction

I am a IT Engineer, the last years I've been working as a Web Developer (mostly on Javascript), during this time I failed several times in my purpose to spend some time coding in personal projects, learning new things or just have fun with maybe the "thing" I am sure I love to do, PROGRAMMING!

I need this time and this challenge to create the habit and come back to my roots, and learn new things.

# Day 1 

Today, I have been working in my personal blog, I have another one running using Jekkyl (Ruby). But I would like to learn and use Gatsby.js and Tailwind CSS because the last weeks I saw some videos and websites and looks really nice.


## Installing Gatsby Tailwind Starter

There is a Gatbsy+Tailwind starter repository, so I cloned it to be the base of this blog you are reading :D 

```
gatsby new blog https://github.com/taylorbryant/gatsby-starter-tailwind

```

Then, we can run it 

```
cd blog
npm run develop

```

After that I took a quick look about the structure and use, and create the folder posts/ and wrote down this **colossal** text to the first post.



## Installing gatsby-source-filesystem and gatsby-transformer-remark

Ok we have the first post, but where is the blog? well we need to install **gatsby-source-filesystem** to be able to take local system data to the Gatsby app and **gatsby-transformer-remark** to transform markdown files to HTML.

``` 
npm install gatsby-source-filesystem
npm install gatsby-transformer-remark

```

And then I added this to the configuration to source the posts folder

``` 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
```

## Create a blog page

I made a blog page iterating the markdown files in the posts folder, for now without any style or something just for test.

## Github 

I am done for today, so I created a github repo and push this code, this will be good for push me up to keep doing the challenge.

## For the next days

Ok, this first day was nice, but I think didn't enjoy too much to write down all the things I made (what is a blog? :P), so I think for the next days I'll list the task after finish them but not too much in details unless I noticed something insteresting.


## Hit me up!

Please let me know if you read this some day, just a +1 could be great to my motivation :D (Yes, everything is about me)

