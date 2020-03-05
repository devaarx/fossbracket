import React from 'react';
import { Link } from 'gatsby';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';

const Post = ({ post }) => {
  const { html } = post;
  const { tagSlugs } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div>
      <Link to="/">All Articles</Link>
      <div>
        <Content body={html} title={title} />
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
      </div>
    </div>
  );
};

export default Post;
