import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from '../styles/latestPost.module.scss';

const LatestPost = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
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
                    sizes(maxWidth: 640) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const postData = data.allMarkdownRemark.edges[0].node;

  return (
    <header>
      <Link to={postData.fields.slug} className={styles.latest}>
        <Img
          sizes={postData.frontmatter.featuredImage.childImageSharp.sizes}
          style={{ height: '100%' }}
        />
        <div className={styles.latest_details}>
          <h1>{postData.frontmatter.title}</h1>
          <small>
            Posted on: <em>{postData.frontmatter.date}</em>
          </small>
        </div>
      </Link>
    </header>
  );
};

export default LatestPost;
