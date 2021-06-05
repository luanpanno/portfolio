import styled from 'styled-components';

interface Props {
  isInTop: boolean;
  openMenu: boolean;
}

export const Container = styled.header<Props>`
  display: flex;
  align-items: center;
  height: 75px;
  background-color: ${(props) =>
    props.isInTop && !props.openMenu
      ? 'transparent'
      : `${props.theme.colors.primary}`};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 200ms;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--body-horizontal-gap);
    width: 100%;
  }

  .logo {
    color: white;
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

  .burger {
    align-items: center;
    color: white;
    font-size: 2rem;
    display: none;
  }

  @media screen and (max-width: 768px) {
    .burger {
      display: flex;
    }
  }
`;

export const Menu = styled.nav<Props>`
  display: flex;
  align-items: center;
  width: 50%;
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

    .active {
      border-bottom: 3px solid
        ${(props) => (props.isInTop ? props.theme.colors.primary : 'white')};
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      /* display: ${(props) => (props.openMenu ? 'flex' : 'none')};
      opacity: ${(props) => (props.openMenu ? '1' : '0')}; */
      background-color: ${(props) => props.theme.colors.primary};
      position: absolute;
      flex-direction: column;
      gap: 12px;
      top: 37px;
      right: -60px;
      height: 50vh;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      padding: 32px 0;
      transform: translateX(360px);
      min-height: 400px;
      min-width: 200px;

      li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          display: inline-block;
          width: 50%;
          text-align: center;
        }
      }

      &.active {
        transform: translateX(0);
      }
    }
  }
`;
