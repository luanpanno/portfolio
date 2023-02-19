import styled from 'styled-components';

export const HamburgerMenuButton = styled.button`
  display: none;

  @media screen and (max-width: 832px) {
    display: flex;
    padding: 10px 5px;
  }
`;

export const BarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 28px;

  .bar {
    width: 28px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.text};
    border-radius: 5px;
    position: absolute;
    transition: all 100ms;
    right: 0;
  }

  .bar:nth-child(1) {
    top: 0px;
  }

  .bar:nth-child(2) {
    top: 8px;
  }

  .bar:nth-child(3) {
    top: 16px;
  }

  &.active {
    .bar:nth-child(1) {
      top: 8px;
      transform: rotate(45deg);
    }

    .bar:nth-child(2) {
      opacity: 0;
    }

    .bar:nth-child(3) {
      top: 8px;
      transform: rotate(-45deg);
    }
  }
`;
