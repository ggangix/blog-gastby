import React from "react";
import { StaticQuery, graphql } from "gatsby"

const LastPosts = () => {
  return(
  <StaticQuery
  query={graphql`
    query LastPostQuery {
      posts: allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC},  limit: 3){
        posts: nodes {
          frontmatter {
            date(formatString: "YYYY-MM-DD")
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
  `}
  render={data => {
    return (
  
    <div className="container my-12 mx-auto px-4 md:px-12 w-auto">
    <div className="title text-center text-3xl">Last Posts</div>
    <div className="flex flex-wrap -mx-1 lg:-mx-4">
    {data.posts.posts.map(post => (
      <div key={post.id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href={post.fields.slug}>
          <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
        </a>
       <header className="flex md:p-4" >        
          <a className="no-underline hover:underline text-black font-bold text-l" href="#">
            {post.frontmatter.title}
          </a>
        </header>
        <p className="text-grey-darker text-sm text-left text-black font-bold md:p-4">
            {post.frontmatter.date}
        </p>
      </article>
      </div>
    ))}
    </div>
  
    </div>)
  }}></StaticQuery>
  )
}

export default LastPosts;