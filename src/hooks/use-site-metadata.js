import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            menu {
              label
              path
            }
            socialLinks {
              label
              link
              icon
            }
            url
            title
            subtitle
            copyright
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
