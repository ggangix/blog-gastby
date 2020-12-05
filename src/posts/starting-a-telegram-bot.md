---
---
title: 21/100 days of code - Create a Twitter Bot that reply random messages
author: Giuseppe Gangi
date: 2020-12-05 20:00:00+01:00
tags: 100daysofcode, giuseppe, gangi, gatsby, tailwind, javascript, feed, tweet, nodejs, pm2, twitter, bot
image: ""
---

Today I refactored a twitter bot that I made some time ago to basically reply random messages from a list to all the tweets that receive one user account with a certain trigger word.

The code is really simple and short and you can find it here: https://github.com/ggangix/twitterReplyBot

You can see the bot in action if you tweet "grita" to the @elabominablebot twitter account.

The instructions to use:

1. Clone the repository
2. npm install
3. Add an .env file with the following structure:

```

TWITTER_API_KEY=
TWITTER_API_SECRET_KEY=
TWITTER_ACCESS_TOKEN=
TWITTER_ACCESS_TOKEN_SECRET=

```

4. Fill the config.json with the information that you want to use to your bot.

   - twitterUserToTrack: The twitter user that you want to listen for an specific word
   - triggerWord: The word that will trigger the reply.
   - messages: An array with replies to be selected randomly.

5. npm start and have fun!
