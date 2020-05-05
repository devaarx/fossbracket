import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import { useSiteMetadata, useTagsList } from '../hooks';
import { SideAds } from '../components/Advertisement';

const TagsListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const tags = useTagsList();

  return (
    <Layout title={`Tags - ${title}`} description={subtitle}>
      <div className="layout_flex">
        <div className="layout_flex_left">
          <ul>
            {tags.map((tag) => (
              <li key={tag.fieldValue}>
                <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="layout_flex_right">
          <SideAds />
        </div>
      </div>
    </Layout>
  );
};

export default TagsListTemplate;
