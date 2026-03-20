import styled from 'styled-components';

type Props = {
  $isAtTop: boolean;
  $isMenuOpen: boolean;
};

export const Container = styled.header<Props>`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  padding: 18px var(--body-horizontal-gap) 0;
  transition: transform 0.2s ease;

  & > div {
    width: 100%;
    max-width: var(--body-max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 18px;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 999px;
    background: ${(props) => props.theme.colors.surface};
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    box-shadow: ${(props) =>
      props.$isAtTop && !props.$isMenuOpen
        ? '0 16px 40px rgba(0, 0, 0, 0.04)'
        : props.theme.colors.shadow};
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .logo {
    color: ${(props) => props.theme.colors.title};
    font-family: var(--font-serif);
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: -0.04em;
    white-space: nowrap;
  }

  @media screen and (max-width: 832px) {
    padding-top: 12px;

    & > div {
      padding: 10px 12px 10px 16px;
    }

    .logo {
      font-size: 1.4rem;
    }
  }
`;

export const Menu = styled.nav<Props>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  ul {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .menu-actions {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 8px;
    padding-left: 16px;
    border-left: 1px solid ${(props) => props.theme.colors.border};
  }

  @media screen and (max-width: 832px) {
    ul {
      position: fixed;
      top: 82px;
      right: var(--body-horizontal-gap);
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
      width: min(360px, calc(100vw - (var(--body-horizontal-gap) * 2)));
      padding: 18px;
      border-radius: 28px;
      border: 1px solid ${(props) => props.theme.colors.borderStrong};
      background: ${(props) => props.theme.colors.surfaceElevated};
      box-shadow: ${(props) => props.theme.colors.shadowStrong};
      -webkit-backdrop-filter: blur(18px);
      opacity: 0;
      pointer-events: none;
      transform: translateY(-8px) scale(0.98);
      transition:
        opacity 0.2s ease,
        transform 0.2s ease;
    }

    ul.active {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0) scale(1);
    }

    .menu-actions {
      justify-content: space-between;
      width: 100%;
      margin-left: 0;
      padding-left: 0;
      padding-top: 12px;
      border-left: none;
      border-top: 1px solid ${(props) => props.theme.colors.border};
    }
  }
`;
