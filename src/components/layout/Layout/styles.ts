import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(var(--page-width) + var(--page-gutter) * 2);
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 var(--page-gutter);
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--section-gap);
  padding: 96px 0 var(--section-gap);

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    padding-top: 64px;
  }
`;
