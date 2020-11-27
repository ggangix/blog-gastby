---
title: 13/100 days of code - We are online!
author: Giuseppe Gangi
date: 2020-11-27 20:13:00+01:00
tags: 100daysofcode, giuseppe, gangi, gatsby, tailwind, javascript, live, gh-pages
image: ""
---

Finally and after 13 days of the 100 days of code challenge, the blog is online and ready to new adventures.

For now I am using gh-pages, but I'm planning to move it to my own server in the near future, for now I'm quite happy with the result.

## How to deploy a gatsby blog using Github pages? (1)


### Configure github repo

1. Navigate to your site’s repository.
2. Under the repository name, click Settings.
3. In the GitHub Pages section, use the Source drop-down to select master (for publishing to the root subdomain) or gh-pages (for publishing to a path like /docs) as your GitHub Pages publishing source.
4.  Click Save.

### Installing the gh-pages package

```
npm install gh-pages --save-dev
```

### Add deploy script to package.json

```
{
  "scripts": {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  }
}
```

and then: 

```
npm run deploy
```

Your site will be in the configured domain.


Happy coding.


**Sources:**

 https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/#configuring-the-github-pages-source-branch