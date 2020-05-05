import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';

function Feed({ edges, heading }) {
  return (
    <div className="feed">
      <h3 className="section_heading">All Posts {heading && `- ${heading}`}</h3>
      {edges.map((edge) => (
        <Link to={edge.node.fields.slug} key={edge.node.fields.slug} className="feed_flex">
          <article>
            <div className="feed_thumb">
              <img src={edge.node.frontmatter.socialImage} alt="" />
            </div>
            <div className="feed_content">
              <h2 className="feed_content_heading">{edge.node.frontmatter.title}</h2>
              <p className="feed_content_description">{edge.node.frontmatter.description}</p>
              <div className="feed_content_bottom">
                <time dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
                  {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
                </time>
                {/* <span>
                <Link to={edge.node.fields.categorySlug}>{edge.node.frontmatter.category}</Link>
              </span> */}
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

export default Feed;
