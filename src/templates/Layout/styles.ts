import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0 1fr auto;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Main = styled.main``;
