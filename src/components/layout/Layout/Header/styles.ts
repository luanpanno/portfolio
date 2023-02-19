import styled from 'styled-components';

type Props = {
  isInTop: boolean;
  isMenuOpen: boolean;
};

export const Container = styled.header<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  box-shadow: ${(props) =>
    props.isInTop && !props.isMenuOpen
      ? 'transparent'
      : '1px -5px 10px 5px rgba(0, 0, 0, .1)'};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 200ms;
  max-width: 100vw;
  background-color: ${(props) => props.theme.colors.background};

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--body-horizontal-gap);
    width: 100%;
    max-width: var(--body-max-width);
  }

  .logo {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    padding: 5px;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;

    @media screen and (max-width: 1280px) {
      font-size: 1.2rem;
      text-align: left;
    }
  }
`;

export const Menu = styled.nav<Props>`
  display: flex;
  align-items: center;
  width: 40%;
  position: relative;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    transition: all 200ms;

    a {
      border-bottom: 3px solid transparent;
    }

    & > .active {
      border-bottom: 3px solid
        ${(props) => (props.isInTop ? props.theme.colors.primary : 'white')};
    }
  }

  @media screen and (max-width: 832px) {
    ul {
      background-color: ${(props) => props.theme.colors.background};
      position: fixed;
      flex-direction: column;
      justify-content: flex-start;
      gap: 12px;
      top: 75px;
      right: 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      padding: 32px 0;
      transform: translateX(360px);
      min-width: 200px;
      width: 0;
      box-shadow: 1px 15px 10px 5px rgba(0, 0, 0, 0.1);

      li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          display: inline-block;
          width: 100%;
          padding: 24px;
          text-align: center;
        }
      }

      &.active {
        transform: translateX(0);
        width: 30%;
      }
    }
  }

  @media screen and (max-width: 750px) {
    ul.active {
      width: 50%;
    }
  }

  @media screen and (max-width: 650px) {
    ul.active {
      width: 75%;
    }
  }
`;
