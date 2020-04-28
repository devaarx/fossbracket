import React from 'react';
import { Link } from 'gatsby';
import { useSiteMetadata } from '../../hooks';
import logoSvg from '../../../static/logo.svg';

const Navigation = () => {
  const { menu, title } = useSiteMetadata();

  return (
    <nav className="nav">
      <div className="nav_logo">
        <Link to="/" title={title}>
          <img src={logoSvg} alt="" />
          fossbracket
        </Link>
      </div>
      <div className="nav_link">
        {menu.map((item, index) => {
          return (
            <Link to={item.path} activeClassName="active" key={index}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
