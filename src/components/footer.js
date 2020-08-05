import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from '../styles/footer.module.scss';

function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `
  );

  const { title, siteUrl } = site.siteMetadata;

  return (
    <>
      <footer className={styles.footer}>
        <a className={styles.footer_link} href={siteUrl}>
          {title}
        </a>{' '}
        © {new Date().getFullYear()} All Rights Reserved
      </footer>
      <div className="progress">
        <span className="shadow" />
      </div>
    </>
  );
}

export default Footer;
