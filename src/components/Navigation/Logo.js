import React from 'react';
import { LogoStyled } from '../Styled/Navigation';

const Logo = ({ url, title }) => {
  return (
    <LogoStyled>
      <a href={url} title={title}>
        {title}
      </a>
    </LogoStyled>
  );
};

export default Logo;
