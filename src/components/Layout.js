import React from 'react';
import Helmet from 'react-helmet';
// import { withPrefix } from 'gatsby';
// import { useSiteMetadata } from '../hooks';
import Navigation from './Navigation';
import Footer from './Footer';
import '../styles/main.scss';

const Layout = ({ children, title, description, socialImage }) => {
  // const { author, url } = useSiteMetadata();
  // const metaImage = socialImage != null ? socialImage : author.photo;
  // const metaImageUrl = url + withPrefix(metaImage);

  return (
    <div className="layout">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        {/* <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} /> */}
      </Helmet>
      <div className="layout_nav">
        <Navigation />
      </div>
      <div className="layout_content">{children}</div>
      <div className="layout_footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
