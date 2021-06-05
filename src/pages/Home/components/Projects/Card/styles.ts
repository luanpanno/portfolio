import styled from 'styled-components';

export const Container = styled.a`
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: #fff;
  transition: all 200ms;
  min-width: 300px;
  max-width: 400px;

  &:hover {
    box-shadow: 0 1px 10px 5px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  .img-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    height: 200px;
    border-bottom: 1px solid rgb(245, 245, 245);

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
      /* text-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.2); */
      color: ${(props) => props.theme.colors.primary};
    }

    span {
      color: #aaa;
      font-size: 1rem;
    }
  }

  /* a {
    display: inline-block;
    background-color: ${(props) => props.theme.colors.primary};
    width: 100%;
    padding: 16px;
    text-align: center;
    color: white;
    transition: all 200ms;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    &:hover {
      opacity: 0.9;
    }
  } */
`;
