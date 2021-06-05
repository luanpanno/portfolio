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

  h1 {
    color: #333;
    text-align: center;
    /* font-size: 1.2rem; */
    margin-top: 10px;
  }
`;

export const Main = styled.main``;
