import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import buttonStyle from '../styles/button.module.scss';

const AsideTags = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  const tags = data.allMarkdownRemark.group;

  return (
    <div>
      <h2>Tags</h2>
      <div>
        {tags.map((tag) => (
          <Link
            to={`/tags/${kebabCase(tag.fieldValue)}/`}
            className={buttonStyle.button}
            key={kebabCase(tag.fieldValue)}
          >
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AsideTags;
