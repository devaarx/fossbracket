import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import { useSiteMetadata, useCategoriesList } from '../hooks';
import { SideAds } from '../components/Advertisement';

const CategoriesListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const categories = useCategoriesList();

  return (
    <Layout title={`Categories - ${title}`} description={subtitle}>
      <div className="layout_flex">
        <div className="layout_flex_left">
          <ul>
            {categories.map((category) => (
              <li key={category.fieldValue}>
                <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                  {category.fieldValue} ({category.totalCount})
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

export default CategoriesListTemplate;
