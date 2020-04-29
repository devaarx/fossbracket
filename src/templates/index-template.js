import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Feed from '../components/Pages/Feed';
import Pagination from '../components/Pagination';
import { useSiteMetadata, useLatestPosts, useTagsList } from '../hooks';
import LatestPosts from '../components/LatestPosts';
import SideTagsList from '../components/SideTagsList/SideTagsList';

const IndexTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const latestPosts = useLatestPosts();
  const tagLists = useTagsList();

  const { currentPage, hasNextPage, hasPrevPage, prevPagePath, nextPagePath } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <LatestPosts latestPosts={latestPosts} />
      <div className="layout_flex">
        <div className="layout_flex_left">
          <Feed edges={edges} />
        </div>
        <div className="layout_flex_right">
          <SideTagsList tagLists={tagLists} />
        </div>
      </div>
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
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { template: { eq: "post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
            tagSlugs
          }
          frontmatter {
            title
            date
            category
            description
            tags
            socialImage
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
