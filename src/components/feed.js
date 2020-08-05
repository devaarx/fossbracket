import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/feed.module.scss';
import Img from 'gatsby-image';

function Feed({ posts, title }) {
  return (
    // <div className={styles.feed}>
    <>
      {title && <h2>{title}</h2>}
      <main>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <Link to={node.fields.slug} key={node.fields.slug} className={styles.feed_flex}>
              <article>
                <Img
                  sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
                  style={{ minWidth: '16.6rem', maxWidth: '16.6rem', height: '10.5rem' }}
                />
                <div className={styles.feed_content}>
                  <header>
                    <h2 className={styles.feed_content_heading}>{title}</h2>
                    <time className={styles.feed_content_date} dateTime={node.frontmatter.date}>
                      Posted on: {node.frontmatter.date}
                    </time>
                  </header>
                  <section>
                    <p
                      className={styles.feed_content_description}
                      dangerouslySetInnerHTML={{
                        __html: node.excerpt
                      }}
                    />
                  </section>
                </div>
              </article>
            </Link>
          );
        })}
      </main>
    </>
    // </div>
  );
}

export default Feed;
