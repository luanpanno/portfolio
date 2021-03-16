import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 75px);

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 2.5rem;
    font-weight: 300;
    width: 500px;
    color: ${(props) => props.theme.colors.text};

    .name {
      color: ${(props) => props.theme.colors.primary};
      font-weight: bold;
    }

    .occupation {
      font-size: 3rem;
      color: ${(props) => props.theme.colors.text};
    }
  }

  .draw {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 70%;

    img {
      pointer-events: none;
      user-select: none;
      width: 65%;
    }
  }
`;
