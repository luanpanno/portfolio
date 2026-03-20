import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  z-index: 5;
  padding: 44px var(--body-horizontal-gap) 0;
`;

export const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.88fr);
  align-items: center;
  gap: 56px;
  width: 100%;
  max-width: var(--body-max-width);
  margin: 0 auto;
  padding: clamp(28px, 5vw, 44px);
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 36px;
  background: ${(props) => props.theme.colors.surface};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: ${(props) => props.theme.colors.shadowStrong};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: auto auto -10% -5%;
    width: 260px;
    height: 260px;
    border-radius: 999px;
    background: ${(props) => props.theme.colors.primarySoft};
    filter: blur(20px);
    opacity: 0.9;
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 32px;

    & > div:nth-child(2) {
      order: 1;
    }

    & > div:nth-child(1) {
      order: 2;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 24px;
    border-radius: 28px;
  }
`;
