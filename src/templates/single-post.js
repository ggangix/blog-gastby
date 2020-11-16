import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"


export default function SinglePost({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <small>{`${post.frontmatter.author}, ${post.frontmatter.date}.`}</small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

SinglePost.propTypes = {
  data: PropTypes.arrayOf({
    posts: PropTypes.arrayOf({
      date: PropTypes.string,
      title: PropTypes.string,
      author:PropTypes.string
    }).isRequired,
  }).isRequired,
}


export const query = graphql`
  query BlogQuery($slug: String!) { 
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(fromNow: true)
        title
        author
      }
    }
  }
`