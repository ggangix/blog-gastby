---
title: 15/100 days of code - Installing Google Analytics
author: Giuseppe Gangi
date: 2020-11-28 18:15:00+01:00
tags: 100daysofcode, giuseppe, gangi, gatsby, tailwind, javascript, google, analytics
image: ""
---

I was a little bit curious about how easy or not is to integrate google analytics with Gatsby, and as I imagine was easy using the **gatsby-plugin-google-analytics** just have to add the basic configuration to the gatsby-config.js file and that's it. It's working. 

After that, I fixed and issue related with the CNAME file, necessary to point to the domain giuseppe.xyz but it had been overwrote after each build, to solve that, I had to create and static directory and put the CNAME file inside, in that way will be in the public directory after build and available in the branch gh-pages.