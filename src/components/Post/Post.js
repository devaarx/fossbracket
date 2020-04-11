import React from 'react';
import Content from './Content';
import Tags from './Tags';

const Post = ({ post }) => {
  const { html } = post;
  const { tagSlugs } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className="article">
      <Content body={html} title={title} date={date} />
      {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
    </div>
  );
};

export default Post;
