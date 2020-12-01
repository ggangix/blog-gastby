---
title: 16/100 days of code - Creating an RSS Feed with Gatsby
author: Giuseppe Gangi
date: 2020-11-30 19:41:00+01:00
tags: 100daysofcode, giuseppe, gangi, gatsby, tailwind, javascript, rss, feed
image: ""
---

I have in mind some ideas to automatize process from the blog to my personal social networks, something like after publish a post, share it on my Twitter and tiny things like that. But of course to do that I needed some kind of structure where I can take the data to my future scripts. So the first option that come to me was to add a RSS Feed.

## Installation

```
npm install gatsby-plugin-feed
```

## Configuration

Then in gatsby-config.js you have to define the data that you want to add to the xml file, a good example is this one:

```
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
  ],
}
```

## Build and have fun

Now after each Gatsby build the rss.xml will be automatically update.

**Source:** https://www.gatsbyjs.com/docs/adding-an-rss-feed/
