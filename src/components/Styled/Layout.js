import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 600px) {
    max-width: 540px;
  }
  @media (min-width: 900px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 940px;
  }
`;
