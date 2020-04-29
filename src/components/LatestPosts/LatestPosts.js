import React from 'react';
import { Link } from 'gatsby';

function LatestPost({ latestPosts }) {
  const { edges } = latestPosts;

  return (
    <header className="latest">
      <h3 className="section_heading">Latest Posts</h3>
      <div className="latest_post">
        {edges.map((edge) => {
          return <LatestPostItem key={edge.node.id} post={edge.node} />;
        })}
      </div>
    </header>
  );
}

function LatestPostItem({ post }) {
  return (
    <Link to={post.fields.slug} className="latest_post_item">
      <article>
        <div className="latest_post_item_thumb">
          <img src={post.frontmatter.socialImage} alt="" />
        </div>
        <h2 className="latest_post_item_heading">{post.frontmatter.title}</h2>
      </article>
    </Link>
  );
}

export default LatestPost;
