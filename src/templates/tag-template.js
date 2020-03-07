import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Feed from '../components/Pages/Feed';
import Pagination from '../components/Pagination';
import { useSiteMetadata } from '../hooks';

const TagTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const { tag, currentPage, prevPagePath, nextPagePath, hasPrevPage, hasNextPage } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle =
    currentPage > 0
      ? `All Posts tagged as "${tag}" - Page ${currentPage} - ${siteTitle}`
      : `All Posts tagged as "${tag}" - ${siteTitle}`;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Feed edges={edges} />
      <Pagination
        prevPagePath={prevPagePath}
        nextPagePath={nextPagePath}
        hasPrevPage={hasPrevPage}
        hasNextPage={hasNextPage}
      />
    </Layout>
  );
};

export const query = graphql`
  query TagPage($tag: String, $postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { tags: { in: [$tag] }, template: { eq: "post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;

export default TagTemplate;
