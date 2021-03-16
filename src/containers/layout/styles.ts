import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  overflow-x: hidden;
  overflow-y: auto;
  /* background-color: white; */
  background-color: ${(props) => props.theme.colors.background};
`;

export const Main = styled.main`
  padding: 0 150px;
`;
