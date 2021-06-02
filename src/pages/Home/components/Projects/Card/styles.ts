import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  .img-wrapper {
    overflow: hidden;
  }

  img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 250px;
    transition: all 200ms;

    &:hover {
      transform: scale(1.2);
    }
  }

  p {
    padding: 24px 12px;
  }
`;
