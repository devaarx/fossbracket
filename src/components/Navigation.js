import React from 'react';
import { useSiteMetadata } from '../hooks';

const Navigation = () => {
  const { menu } = useSiteMetadata();

  return (
    <ul>
      {menu.map((item, index) => {
        return (
          <li key={index}>
            <a href={item.path}>{item.label}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
