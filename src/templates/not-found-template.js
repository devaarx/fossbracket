import React from 'react';
import Layout from '../components/Layout';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundTemplate;
