import React from 'react';
import { Link } from 'gatsby';

const Tags = ({ tags, tagSlugs }) => (
  <ul>
    {tagSlugs &&
      tagSlugs.map((slug, i) => (
        <li key={tags[i]}>
          <Link to={slug}>{tags[i]}</Link>
        </li>
      ))}
  </ul>
);

export default Tags;
