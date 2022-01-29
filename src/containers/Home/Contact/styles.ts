import styled from 'styled-components';

export const Container = styled.section`
  min-height: 60vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px var(--body-horizontal-gap) 48px var(--body-horizontal-gap);
  width: 100vw;

  @media screen and (max-width: 1400px) {
    padding: 16px var(--body-horizontal-gap) 48px var(--body-horizontal-gap);
  }

  @media screen and (max-width: 500px) {
    padding: 32px 12px 48px 12px;
  }
`;
