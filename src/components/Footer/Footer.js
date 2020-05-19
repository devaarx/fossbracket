import React from 'react';
import { useSiteMetadata } from '../../hooks';
import FollowLinks from './FollowLinks';

function Footer() {
  const { copyright, socialLinks } = useSiteMetadata();
  return (
    <>
      <footer className="footer">
        <FollowLinks socialLinks={socialLinks} />
        <div className="footer_copy">{copyright}</div>
      </footer>
      <div className="progress" role="bar">
        <span className="shadow" />
      </div>
    </>
  );
}

export default Footer;
