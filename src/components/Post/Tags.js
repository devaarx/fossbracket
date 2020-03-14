import React from 'react';
import { Link } from 'gatsby';

const Tags = ({ tags, tagSlugs }) => (
  <div>
    {tagSlugs &&
      tagSlugs.map((slug, i) => (
        <Link key={tags[i]} to={slug}>
          {tags[i]}
        </Link>
      ))}
  </div>
);

export default Tags;
