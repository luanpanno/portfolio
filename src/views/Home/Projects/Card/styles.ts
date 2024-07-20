import styled from 'styled-components';

export const Container = styled.a`
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: #fff;
  transition: all 200ms;
  max-width: 350px;

  &:hover {
    box-shadow: 0 1px 10px 5px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  .img-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    height: 162px;
    border-bottom: 1px solid rgb(245, 245, 245);
    max-width: calc(100vw - 50px);

    img {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      transition: all 200ms;
      width: 100%;
      height: 100%;
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
      color: #aaa;
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
