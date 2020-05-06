import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Header, Content } from '../components/Post';
import { useSiteMetadata } from '../hooks';
import { SideAds } from '../components/Advertisement';

const PostTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter, timeToRead, html } = data.markdownRemark;
  const { title: postTitle, description: postDescription, socialImage } = frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;

  return (
    <Layout
      title={`${postTitle} - ${siteTitle}`}
      description={metaDescription}
      socialImage={socialImage}
    >
      <Header frontmatter={frontmatter} timeToRead={timeToRead} />
      <div className="layout_flex">
        <div className="layout_flex_left">
          <Content body={html} />
        </div>
        <div className="layout_flex_right">
          <SideAds />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        socialImage
        category
      }
      timeToRead
    }
  }
`;

export default PostTemplate;
