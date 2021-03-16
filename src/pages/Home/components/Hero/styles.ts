import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 75px);
  position: relative;

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 3rem;
    font-weight: 300;
    color: ${(props) => props.theme.colors.text};
    position: absolute;
    top: 38%;
    left: 13%;

    .intro {
      font-size: 2rem;
    }

    .name {
      font-size: 3rem;
      color: ${(props) => props.theme.colors.primary};
      font-weight: bold;
    }

    .Typewriter {
      font-size: 3.5rem;
      color: ${(props) => props.theme.colors.text};
    }
  }

  .draw {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primary};
    position: absolute;
    right: -350px;

    img {
      pointer-events: none;
      user-select: none;
      width: 100%;
    }
  }
`;
