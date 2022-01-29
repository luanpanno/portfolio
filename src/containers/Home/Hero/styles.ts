import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  z-index: 5;
  margin: 200px var(--body-horizontal-gap) 100px var(--body-horizontal-gap);

  @media screen and (max-width: 832px) {
    margin: 100px var(--body-horizontal-gap) 50px var(--body-horizontal-gap);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 832px) {
    flex-direction: column;
    row-gap: 32px;

    & > div:nth-child(2) {
      order: 1;
    }

    & > div:nth-child(1) {
      order: 2;
    }
  }
`;
