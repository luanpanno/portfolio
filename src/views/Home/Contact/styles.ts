import styled from 'styled-components';

export const Container = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 32px var(--body-horizontal-gap);
  row-gap: 32px;

  @media screen and (max-width: 350px) {
    /* padding: 32px 8px; */
  }
`;
