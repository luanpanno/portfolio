import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 28px;
  background-color: ${(props) => props.theme.colors.surface};
  overflow: hidden;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-6px);
      border-color: ${(props) => props.theme.colors.borderStrong};
    }
  }

  .img-wrapper {
    position: relative;
    width: 100%;
    padding-top: 64%;
    background-color: ${(props) => props.theme.colors.surfaceAccent};
    overflow: hidden;
  }

  .img-wrapper::after {
    content: '';
    position: absolute;
    inset: auto 0 0;
    height: 38%;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(
        17,
        24,
        28,
        ${(props) => (props.theme.mode === 'dark' ? 0.22 : 0.08)}
      )
    );
    pointer-events: none;
  }

  .img-wrapper.loading {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.55;
    }
    100% {
      opacity: 1;
    }
  }

  .img-wrapper img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
  }

  @media (hover: hover) {
    &:hover .img-wrapper img {
      transform: scale(1.04);
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 14px;
    height: 100%;
    padding: 22px;
  }

  .text h3 {
    font-size: 1.55rem;
    font-weight: 500;
    line-height: 1.05;
  }

  .text span {
    display: inline-flex;
    align-self: flex-start;
    justify-content: center;
    width: fit-content;
    padding: 10px 16px;
    border-radius: 999px;
    border: 1px solid ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.primarySoft};
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  @media screen and (max-width: 480px) {
    border-radius: 24px;

    .text {
      padding: 18px;
    }

    .text h3 {
      font-size: 1.4rem;
    }
  }
`;
