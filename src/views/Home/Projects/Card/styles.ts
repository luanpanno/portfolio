import styled from 'styled-components';

export const Container = styled.a`
  box-shadow: 0 1px 5px 1px ${(props) => props.theme.colors.light};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.background};
  transition: all 200ms;
  max-width: 350px;

  &:hover {
    box-shadow: 0 1px 10px 5px ${(props) => props.theme.colors.light};
    transform: scale(1.05);
  }

  .img-wrapper {
    background-color: #f0f0f0;
    transition: opacity 0.3s ease-in-out;

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
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    height: 162px;
    border-bottom: 1px solid ${(props) => props.theme.colors.light};
    max-width: calc(100vw - 50px);

    img {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      width: 100%;
      transition: all 200ms;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;

    h3 {
      font-size: 1.2rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.primary};
    }

    span {
      color: ${(props) => props.theme.colors.text};
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 710px) {
    width: 350px;
  }

  @media screen and (max-width: 500px) {
    max-width: 100%;
    width: 100%;
  }
`;
