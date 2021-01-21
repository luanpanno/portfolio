import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
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

export const Main = styled.main`
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: #333;
    font-size: 3rem;
  }

  .description {
    font-size: 1rem;
    color: #888;
    margin-top: 10px;
  }

  .emoji {
    margin-top: 10px;
    font-size: 3rem;
  }

  button {
    margin-top: 25px;
  }
`;
