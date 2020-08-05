import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from '../styles/layout.module.scss';
import articleStyle from '../styles/article.module.scss';
import kebabCase from 'lodash/kebabCase';
import Sharer from '../components/sharer';

const BlogPostTemplate = ({
  data
  // pageContext
}) => {
  const post = data.markdownRemark;
  // const { previous, next } = pageContext;
  const siteLink = data.site.siteMetadata.siteUrl;

  const shareLink = `${siteLink}${post.fields.slug}`;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.featuredImage.childImageSharp.sizes.src}
      />
      <div className={styles.layout_flex}>
        <main className={styles.layout_flex_left}>
          <article className={articleStyle.article}>
            <header className={articleStyle.article_header}>
              <h1>{post.frontmatter.title}</h1>
              <div className={articleStyle.article_header_details}>
                <time dateTime={post.frontmatter.date}>
                  Posted on: <em>{post.frontmatter.date}</em>
                </time>
                <span>
                  Category:{' '}
                  <Link
                    className={articleStyle.article_header_details_category}
                    to={`/categories/${kebabCase(post.frontmatter.category)}/`}
                  >
                    {post.frontmatter.category}
                  </Link>
                </span>
              </div>
              <Sharer url={shareLink} title={post.frontmatter.title} />
            </header>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              className={articleStyle.article_content}
            />
          </article>
          <Sharer heading="Share this post:" url={shareLink} title={post.frontmatter.title} />
        </main>
        <aside className={styles.layout_flex_right}></aside>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
        description
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 580) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      fields {
        slug
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
