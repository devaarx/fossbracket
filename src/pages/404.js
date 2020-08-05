import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404 - Page Not Found" />
      <h1 style={{ margin: '3rem 0 2rem' }}>
        Ooopsy! You are lost in space{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h1>
      <p>
        But don't worry! We've got you. Click{' '}
        <Link to="/" style={{ color: 'black', textDecoration: 'underline' }}>
          here
        </Link>{' '}
        to go home, Earth.
      </p>
    </Layout>
  );
};

export default NotFoundPage;
