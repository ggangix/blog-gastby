import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PropTypes from "prop-types";

export default function SinglePost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO keywords={[post.frontmatter.tags]} title={post.frontmatter.title} />

      <section className="items-center m-8">
        <div>
          <div>
            <section id="title" className="text-3xl font-black mt-2 mb-5">
              {post.frontmatter.title}
            </section>
            <section id="author" className="mb-10 font-black text-left text-s">
              {" "}
              {`${post.frontmatter.author}, ${post.frontmatter.date}.`}
            </section>
            <section
              className="markdown"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

SinglePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
        tags: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD - HH:mm")
        title
        tags
        author
      }
    }
  }
`;
