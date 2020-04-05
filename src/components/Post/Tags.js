import React from 'react';
import { Link } from 'gatsby';

const Tags = ({ tags, tagSlugs }) => (
  <div className="article_tags">
    <span>Tags :</span>
    {tagSlugs &&
      tagSlugs.map((slug, i) => (
        <Link key={tags[i]} to={slug} className="tags">
          {tags[i]}
        </Link>
      ))}
  </div>
);

export default Tags;
