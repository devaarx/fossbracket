import styled from 'styled-components';

export const NavigationStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0;
`;

export const LogoStyled = styled.div`
  width: 12rem;
`;

export const NavlinksStyled = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  > li {
    margin: 0 1rem 0 0;
    > a {
      padding: 0.1rem 0.5rem;
    }
  }
`;
