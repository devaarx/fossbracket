import React from 'react';
import { useSiteMetadata } from '../../hooks';
import Logo from './Logo';
import { NavigationStyled } from '../Styled/Navigation';
import Navlinks from './Navlinks';

const Navigation = () => {
  const { menu, url, title } = useSiteMetadata();

  return (
    <NavigationStyled>
      <Logo url={url} title={title} />
      <Navlinks menu={menu} />
    </NavigationStyled>
  );
};

export default Navigation;
