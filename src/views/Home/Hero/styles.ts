import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  z-index: 5;
  padding: 44px var(--body-horizontal-gap) 0;
`;

export const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 360px);
  grid-template-areas:
    'intro picture'
    'supplementary supplementary';
  align-items: start;
  column-gap: 56px;
  row-gap: 28px;
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

  .hero-intro {
    grid-area: intro;
  }

  .hero-supplementary {
    grid-area: supplementary;
  }

  .hero-picture {
    grid-area: picture;
    justify-self: end;
    align-self: center;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'picture'
      'intro'
      'supplementary';
    row-gap: 32px;

    .hero-picture {
      align-self: start;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 24px;
    border-radius: 28px;
  }
`;
