import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Feed from '../components/feed';
import styles from '../styles/layout.module.scss';
import buttonStyle from '../styles/button.module.scss';

const Category = ({ pageContext, data }) => {
  const { category } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } in "${category}" category`;

  return (
    <Layout>
      <SEO title={categoryHeader} />
      <div>
        <h1 style={{ margin: '3rem 0 2rem' }}>{categoryHeader}</h1>
        <div className={styles.layout_flex}>
          <div className={styles.layout_flex_left}>
            <Feed posts={edges} />
            <Link to="/categories" className={buttonStyle.button}>
              All Categories &#8594;
            </Link>
          </div>
          <div className={styles.layout_flex_right} />
        </div>
      </div>
    </Layout>
  );
};

export default Category;

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
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
