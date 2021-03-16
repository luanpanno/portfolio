import styled from 'styled-components';

export const Container = styled.header`
  height: 75px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  position: sticky;
  top: 0;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);

  & > div {
    width: 70%;
  }

  & > nav {
    display: flex;
    align-items: center;
    width: 50%;

    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .logo {
    color: black;
    text-decoration: none;
    padding: 5px;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;
