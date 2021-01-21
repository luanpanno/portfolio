import styled from 'styled-components';

export const Container = styled.header`
  height: 75px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  position: sticky;
  top: 0;

  a {
    color: black;
    text-decoration: none;
    padding: 5px 10px;
  }

  .logo {
    font-size: 1.5rem;
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
