import styled from 'styled-components';

export const Container = styled.a`
  box-shadow: 0 1px 5px 1px ${(props) => props.theme.colors.light};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.background};
  transition: all 200ms ease-in-out;
  width: 100%;
  max-width: 350px;
  overflow: hidden;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 1px 15px 5px ${(props) => props.theme.colors.light};
      transform: translateY(-5px);
    }
  }

  .img-wrapper {
    background-color: #f0f0f0;
    transition: opacity 0.3s ease-in-out;
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */

    &.loading {
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.4;
      }
      100% {
        opacity: 1;
      }
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-in-out;
    }

    @media (hover: hover) {
      &:hover img {
        transform: scale(1.05);
      }
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;

    h3 {
      font-size: 1.2rem;
      font-weight: 600;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.primary};
      line-height: 1.4;
    }

    span {
      color: ${(props) => props.theme.colors.lightText};
      font-size: 1rem;
      line-height: 1.6;
    }
  }

  @media screen and (max-width: 480px) {
    max-width: 100%;

    .text {
      padding: var(--content-spacing);

      h3 {
        font-size: 1.1rem;
      }

      span {
        font-size: 0.9rem;
      }
    }
  }
`;
