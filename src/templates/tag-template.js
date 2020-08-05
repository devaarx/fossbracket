import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import styles from '../styles/layout.module.scss';
import Feed from '../components/feed';
import buttonStyle from '../styles/button.module.scss';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;

  return (
    <Layout>
      <SEO title={tagHeader} />
      <div>
        <h1 style={{ margin: '3rem 0 2rem' }}>{tagHeader}</h1>
        <div className={styles.layout_flex}>
          <div className={styles.layout_flex_left}>
            <Feed posts={edges} />
            <Link to="/tags" className={buttonStyle.button}>
              All Tags &#8594;
            </Link>
          </div>
          <div className={styles.layout_flex_right} />
        </div>
      </div>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
