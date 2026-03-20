import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: min(100%, 390px);
  margin-left: auto;
  padding: 18px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 34px;
  background: linear-gradient(
    145deg,
    ${(props) => props.theme.colors.surfaceElevated} 0%,
    ${(props) => props.theme.colors.surfaceAccent} 100%
  );
  box-shadow: ${(props) => props.theme.colors.shadowStrong};

  &::before {
    content: '';
    position: absolute;
    inset: 12px auto auto 12px;
    width: 90px;
    height: 90px;
    border-radius: 24px;
    background: ${(props) => props.theme.colors.primarySoft};
    filter: blur(4px);
    opacity: 0.9;
  }

  .border {
    position: relative;
    padding: 16px;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 26px;
    background: ${(props) => props.theme.colors.surface};
  }

  .wrapper {
    position: relative;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 22px;
    background: ${(props) => props.theme.colors.surfaceAccent};
  }

  .wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.03);
  }

  @media screen and (max-width: 1000px) {
    order: 1;
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    padding: 14px;
    border-radius: 28px;

    .border {
      padding: 12px;
      border-radius: 22px;
    }

    .wrapper {
      border-radius: 18px;
    }
  }
`;
