import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useSiteMetadata } from '../../hooks';
import logoSvg from '../../../static/media/logo.svg';

const Navigation = () => {
  const { menu, title } = useSiteMetadata();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav_logo">
        <Link to="/" title={title}>
          <img src={logoSvg} alt="" />
          fossbracket
        </Link>
      </div>
      <span className="nav_menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </span>
      <div className={`nav_link ${menuOpen ? 'open' : ''}`}>
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
