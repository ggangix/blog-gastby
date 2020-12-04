---
title: 20/100 days of code - Add a parameter to Auto Populate Replies twitter
author: Giuseppe Gangi
date: 2020-12-04 18:00:00+01:00
tags: 100daysofcode, giuseppe, gangi, javascript, tweet, nodejs, pm2, twitter, bot
image: ""
---

Today I made a couple of changes to the twitter bot that I made yesterday, because I noticed that was no replying to all the mentioned user in a tweet. This happen because we have to add the following parameter to the update message: 

```
   auto_populate_reply_metadata: true
```

I think is working better now, I also added a couple of logs more and deployed better on the server. I have more things on mind, let's see how works.
