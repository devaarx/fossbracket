import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import styles from '../styles/layout.module.scss';
import LatestPost from '../components/latestPost';
import Feed from '../components/feed';
import AsideTags from '../components/asideTags';

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="All Posts" />
      <LatestPost />
      <div className={styles.layout_flex}>
        <div className={styles.layout_flex_left}>
          <Feed title="All Posts" posts={posts} />
        </div>
        <aside className={styles.layout_flex_right}>
          <AsideTags />
        </aside>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 260) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
