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
    filter: grayscale(100);

    &:hover {
      filter: grayscale(0);
      transform: scale(1.1);
    }

    &.active {
      filter: grayscale(0);
    }
  }
`;
