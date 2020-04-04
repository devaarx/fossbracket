import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';

function Feed({ edges }) {
  return (
    <div className="feed">
      {edges.map((edge) => (
        <article key={edge.node.fields.slug} className="feed_article">
          <div className="feed_article_detail">
            <time dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
              {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
            </time>
            <b>&#9679;</b>
            <span>
              <Link to={edge.node.fields.categorySlug}>{edge.node.frontmatter.category}</Link>
            </span>
          </div>
          <h2 className="feed_article_heading">
            <Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
          </h2>
          <p className="feed_article_description">{edge.node.frontmatter.description}</p>
          <div className="feed_article_bottom">
            <Link to={edge.node.fields.slug}>Read more...</Link>
            {/* {edge.node.frontmatter.tags && edge.node.fields.tagSlugs && (
              <Tags tags={edge.node.frontmatter.tags} tagSlugs={edge.node.fields.tagSlugs} />
            )} */}
          </div>
        </article>
      ))}
    </div>
  );
}

export default Feed;
