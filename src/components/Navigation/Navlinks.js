import React from 'react';
import { Link } from 'gatsby';
import { NavlinksStyled } from '../Styled/Navigation';

const Navlinks = ({ menu }) => {
  return (
    <NavlinksStyled>
      {menu.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        );
      })}
    </NavlinksStyled>
  );
};

export default Navlinks;
