import styled from 'styled-components';

interface Props {
  imageSrc: string;
}

export const Container = styled.section<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.imageSrc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  z-index: 5;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-weight: 300;
  color: white;
  z-index: 2;
  text-align: center;

  .intro {
    font-size: 2rem;
  }

  .name {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
  }

  .Typewriter {
    color: white;
    font-size: 3.5rem;
    margin: 20px 0;
    padding: 0 12px;
  }

  a {
    outline: none;
    padding: 10px 20px;
    border-radius: 2px;
    color: white;
    cursor: pointer;
    transition: all 200ms;
    background-color: ${(props) => props.theme.colors.primary};
    font-size: 0.9rem;

    &:hover {
      transform: scale(1.08);
    }
  }

  @media screen and (max-width: 1280px) {
    .intro {
      font-size: 1.8rem;
    }

    .name {
      font-size: 2.2rem;
    }

    .Typewriter {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 864px) {
    .intro {
      font-size: 1.6rem;
    }

    p {
      font-size: 2.5rem;
    }

    .name {
      font-size: 2.1rem;
    }

    .Typewriter {
      font-size: 2.8rem;
    }
  }

  @media screen and (max-width: 700px) {
    .intro {
      font-size: 1.6rem;
    }

    .name {
      font-size: 1.8rem;
    }

    .Typewriter {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 400px) {
    .intro {
      font-size: 1.4rem;
    }

    .name {
      font-size: 1.6rem;
    }

    .Typewriter {
      font-size: 1.8rem;
    }

    a {
      font-size: 0.8rem;
    }
  }
`;
