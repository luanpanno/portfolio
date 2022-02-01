import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 5;
  margin: 200px 0 100px 0;

  @media screen and (max-width: 1000px) {
    margin: 100px var(--body-horizontal-gap) 50px var(--body-horizontal-gap);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--body-max-width);
  padding: 0 var(--body-horizontal-gap);

  @media screen and (max-width: 1000px) {
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
