import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import styles from '../styles/list.module.scss';

const CategoryPage = ({
  data: {
    allMarkdownRemark: { group }
  }
}) => (
  <Layout>
    <SEO title={'All Categories'} />
    <h1 style={{ margin: '3rem 0 2rem' }}>All Categories</h1>
    <ul className={styles.list}>
      {group.map((category) => (
        <li key={category.fieldValue}>
          <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
            {category.fieldValue} ({category.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default CategoryPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
