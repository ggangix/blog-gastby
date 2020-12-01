---
title: 17/100 days of code - Create an app to tweet from RSS Feed
author: Giuseppe Gangi
date: 2020-11-29 19:41:00+01:00
tags: 100daysofcode, giuseppe, gangi, gatsby, tailwind, javascript, rss, feed, tweet, nodejs
image: ""
---

Today I created and nodejs app to check the RSS Feed that I created yesterday, every certain time (6 hours by default), and tweet in my personal account if there is a new blog post.

Code source: https://github.com/ggangix/rssFeedToTweet

### Usage

1. Clone the repository
2. npm install
3. Add an .env file with the following structure:

```

FEED_RSS=
TWITTER_API_KEY=
TWITTER_API_SECRET_KEY=
TWITTER_ACCESS_TOKEN=
TWITTER_ACCESS_TOKEN_SECRET=

```

4. npm start and have fun!
