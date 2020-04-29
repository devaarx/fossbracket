import { useStaticQuery, graphql } from 'gatsby';

const useLatestPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query LatestPosts {
        allMarkdownRemark(
          limit: 3
          filter: { frontmatter: { template: { eq: "post" } } }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              id
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
    `
  );

  return allMarkdownRemark;
};

export default useLatestPosts;
