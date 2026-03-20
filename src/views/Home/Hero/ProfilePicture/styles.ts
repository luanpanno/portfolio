import styled, { keyframes } from 'styled-components';

const fadeInPicture = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const Container = styled.div`
  position: relative;
  width: min(100%, 312px);
  margin-left: auto;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 30px;
  background: ${(props) => props.theme.colors.surfaceAccent};
  box-shadow: ${(props) => props.theme.colors.shadow};
  animation: ${fadeInPicture} 0.78s ease 0.04s both;
  transition:
    transform 0.28s ease,
    border-color 0.28s ease,
    box-shadow 0.28s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 10px auto auto 10px;
    width: 68px;
    height: 68px;
    border-radius: 20px;
    background: ${(props) => props.theme.colors.primarySoft};
    filter: blur(3px);
    opacity: 0.55;
    transition:
      transform 0.35s ease,
      opacity 0.35s ease,
      filter 0.35s ease;
  }

  .border {
    position: relative;
    padding: 12px;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 22px;
    background: ${(props) => props.theme.colors.surface};
    transition:
      transform 0.3s ease,
      border-color 0.3s ease;
  }

  .wrapper {
    position: relative;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 18px;
    background: ${(props) => props.theme.colors.surfaceAccent};
  }

  .wrapper::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      transparent 18%,
      rgba(255, 255, 255, 0.18) 42%,
      transparent 68%
    );
    opacity: 0;
    transform: translateX(-18%);
    transition:
      opacity 0.35s ease,
      transform 0.55s ease;
    pointer-events: none;
  }

  .wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.03);
    transition: transform 0.45s ease;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-6px) rotate(-0.8deg);
      border-color: ${(props) => props.theme.colors.borderStrong};
      box-shadow: ${(props) => props.theme.colors.shadowStrong};
    }

    &:hover::before {
      transform: translate(8px, 8px) scale(1.08);
      opacity: 0.72;
      filter: blur(5px);
    }

    &:hover .border {
      transform: rotate(1deg);
      border-color: ${(props) => props.theme.colors.borderStrong};
    }

    &:hover .wrapper::after {
      opacity: 1;
      transform: translateX(16%);
    }

    &:hover .wrapper img {
      transform: scale(1.08);
    }
  }

  @media screen and (max-width: 1000px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
    border-radius: 24px;

    .border {
      padding: 10px;
      border-radius: 18px;
    }

    .wrapper {
      border-radius: 16px;
    }
  }
`;
