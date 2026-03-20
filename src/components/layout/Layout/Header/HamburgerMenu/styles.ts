import styled from 'styled-components';

export const HamburgerMenuButton = styled.button`
  display: none;

  @media screen and (max-width: 832px) {
    display: grid;
    place-items: center;
    width: 46px;
    height: 46px;
    cursor: pointer;
    border-radius: 999px;
    border: 1px solid ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.surfaceAccent};
    box-shadow: ${(props) => props.theme.colors.shadow};
    transition:
      transform 0.2s ease,
      background-color 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-1px);
      border-color: ${(props) => props.theme.colors.borderStrong};
      box-shadow: ${(props) => props.theme.colors.shadowStrong};
    }
  }
`;

export const BarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 18px;
  width: 24px;

  .bar {
    width: 24px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.title};
    border-radius: 999px;
    position: absolute;
    transition: all 150ms ease;
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
