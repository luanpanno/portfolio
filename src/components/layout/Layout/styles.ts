import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 56px;

  @media screen and (max-width: 768px) {
    gap: 24px;
    padding-bottom: 40px;
  }
`;
