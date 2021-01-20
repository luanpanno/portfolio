import styled from 'styled-components';

export const Container = styled.header`
  height: 75px;
  background-color: #fff;
  /* background-color: #555; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;

  a {
    color: black;
    text-decoration: none;
  }

  .logo {
    font-size: 1.5rem;
    padding: 5px 10px;
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
`;
