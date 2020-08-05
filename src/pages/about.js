import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import styles from '../styles/layout.module.scss';

function AboutPage() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          about
        }
      }
    }
  `);

  const { title, about } = site.siteMetadata;

  return (
    <Layout>
      <SEO title="About Us" />
      <h1 style={{ margin: '3rem 0 2rem' }}>About {title}</h1>
      <div className={styles.layout_flex}>
        <div className={styles.layout_flex_left}>
          <p style={{ fontSize: '1.1rem' }}>{about}</p>
        </div>
        <div className={styles.layout_flex_right} />
      </div>
    </Layout>
  );
}

export default AboutPage;
