import React from 'react';
import { NavlinksStyled, LinkStyled } from '../Styled/Navigation';

const Navlinks = ({ menu }) => {
  return (
    <NavlinksStyled>
      {menu.map((item, index) => {
        return (
          <li key={index}>
            <LinkStyled to={item.path}>{item.label}</LinkStyled>
          </li>
        );
      })}
    </NavlinksStyled>
  );
};

export default Navlinks;
