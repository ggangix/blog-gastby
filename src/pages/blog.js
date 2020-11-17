import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby"
import PropTypes from "prop-types"


function Blog({ data }) {
  const { posts } = data.posts;
  
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
      <div>
      <h1>My blog posts!</h1>

      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.frontmatter.title}</h2>
          <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
      </section>
    </Layout>
  );
}


Blog.propTypes = {
  data: PropTypes.arrayOf({
    posts: PropTypes.arrayOf({
      date: PropTypes.string,
      title: PropTypes.string,
      author:PropTypes.string
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query MyQuery {
    posts: allMarkdownRemark {
      posts: nodes {
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`

export default Blog;