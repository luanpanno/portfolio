import styled from 'styled-components';

interface Props {
  isInTop: boolean;
}

export const Container = styled.header<Props>`
  height: 75px;
  background-color: ${(props) =>
    props.isInTop ? 'transparent' : `${props.theme.colors.primary}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--body-horizontal-gap);
  position: sticky;
  top: 0;
  /* box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1); */
  z-index: 100;
  transition: all 200ms;

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
      color: white;

      .active {
        border-bottom: 3px solid
          ${(props) => (props.isInTop ? props.theme.colors.primary : 'white')};
      }
    }
  }

  .logo {
    color: white;
    text-decoration: none;
    padding: 5px;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;
