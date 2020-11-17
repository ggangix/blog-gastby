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
        keywords={[`blog`, `giuseppe`, `gangi`, `tailwindcss`]}
        title="Blog"
      />

      <section className="flex flex-col items-center md:flex-row">
      <div>
      {posts.map(post => (
        <article key={post.id} className="box-border p-5">
          <a href={post.fields.slug}><h1><b>{post.frontmatter.title}</b></h1></a>
          <small>{post.frontmatter.date}</small>
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
    posts: allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }){
      posts: nodes {
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
        fields{
          slug
        }
      }
    }
  }
`

export default Blog;