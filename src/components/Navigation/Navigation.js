import React from 'react';
import { Link } from 'gatsby';
import useDarkMode from 'use-dark-mode';
import { useSiteMetadata } from '../../hooks';

const Navigation = () => {
  const { menu, title } = useSiteMetadata();
  const darkMode = useDarkMode(true);

  return (
    <nav className="nav">
      <div className="nav_logo">
        <Link to="/" title={title}>
          foss<span>bracket</span>
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
      <div className="nav_toggle" onClick={() => darkMode.toggle()} />
    </nav>
  );
};

export default Navigation;
