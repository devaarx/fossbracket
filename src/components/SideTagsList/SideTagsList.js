import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

function SideTagsList({ tagLists }) {
  return (
    <div className="taglist_aside">
      <h3 className="section_heading">Tags</h3>
      {tagLists.map((tag) => {
        return (
          <Link key={tag.fieldValue} to={`/tag/${kebabCase(tag.fieldValue)}/`} className="button">
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        );
      })}
    </div>
  );
}

export default SideTagsList;
