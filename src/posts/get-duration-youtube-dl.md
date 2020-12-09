---
title: 24/100 days of code - get duration of a video without download with youtube-dl 
author: Giuseppe Gangi
date: 2020-12-09 19:00:00+01:00
tags: 100daysofcode, giuseppe, gangi, gatsby, tailwind, javascript, refactor, telegram, bot, youtube-dl, duration, video
image: ""
---

## Introduction 

Yesterday was day-off because I got sick, but today I was ready to keep coding.

I noticed that my [Telegram bot][1] to Download youtube files got stucked for a strange reason, after check was because telegram has a limit to bots to don't send audios greater than 50MB so I had to make a modification in the bot.


First idea that came to my mind was to add a 3rd party service or self host the audio for some days and send the link to every user, but after thinking along the day, the concept is to keep it simple, so I did something different.

## youtube-dl 

As maybe you know by my source code, I am using youtube-dl to download videos and extract audio, so to check the duration first without download the file, I am using the following command

```
youtube-dl --simulate --get-duration  
```

In that way I can check the time and compare with the max allowed time before download and send it by using telegram API.

Happy coding.


[1]: https://github.com/ggangix/Youtube-to-Audio-Telegram-Bot
