import styled from 'styled-components';

interface Props {
  imageSrc: string;
}

export const Container = styled.section<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  /* height: calc(100vh - 75px); */
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.imageSrc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 5;

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 3rem;
    font-weight: 300;
    color: white;
    /* color: ${(props) => props.theme.colors.text}; */
    z-index: 2;

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
      /* color: ${(props) => props.theme.colors.text}; */
      margin: 20px 0;
    }
  }
`;
