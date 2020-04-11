import React from 'react';
import { useSiteMetadata } from '../../hooks';

function Footer() {
  const { copyright, socialLinks } = useSiteMetadata();
  return (
    <footer className="footer">
      <span className="footer_copy">{copyright}</span>
      <ul className="footer_nav">
        {socialLinks.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link} target="_blank">
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
