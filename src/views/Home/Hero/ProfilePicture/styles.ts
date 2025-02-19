import styled, { css } from 'styled-components';

const BorderStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 100%;
`;

export const Container = styled.div`
  ${BorderStyle};
  height: 300px;
  width: 300px;
  transition: all 200ms;

  .border {
    ${BorderStyle};
    height: 275px;
    width: 275px;
    transition: all 200ms;

    &:hover {
      height: 290px;
      width: 290px;
    }

    @media screen and (max-width: 1000px) {
      height: 225px;
      width: 225px;

      &:hover {
        height: 240px;
        width: 240px;
      }
    }
  }

  .wrapper {
    overflow: hidden;
    height: 250px;
    width: 250px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 200ms;

    img {
      margin-top: 15px;
    }

    &:hover {
      height: 280px;
      width: 280px;
    }
  }

  @media screen and (max-width: 1000px) {
    order: 1;
    height: 250px;
    width: 250px;

    .wrapper {
      height: 200px;
      width: 200px;

      img {
        margin-top: 30px;
      }

      &:hover {
        height: 230px;
        width: 230px;
      }
    }
  }
`;
