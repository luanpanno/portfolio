import styled from 'styled-components';

type Props = {
  language: string;
};

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;

  a {
    width: 36px;
    height: 27px;
    transition: all 200ms;
    filter: grayscale(100);

    &:hover {
      filter: grayscale(0);
      transform: scale(1.1);
    }

    &.active {
      filter: grayscale(0);
    }

    .flag {
      display: inline-block;
      width: 32px;
      height: 24px;
    }
  }
`;
