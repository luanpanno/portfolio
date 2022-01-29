import styled from 'styled-components';

type Props = {
  language: string;
};

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;

  button {
    height: 32px;
    width: 32px;
    transition: all 200ms;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: grayscale(0);
      transform: scale(1.1);
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  .pt-BR {
    filter: ${(props) =>
      props.language === 'pt-BR' ? 'grayscale(0)' : 'grayscale(100)'};
  }

  .en-US {
    filter: ${(props) =>
      props.language === 'en-US' ? 'grayscale(0)' : 'grayscale(100)'};
  }
`;
