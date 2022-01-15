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

  .wrapper {
    overflow: hidden;
    height: 250px;
    width: 250px;
    border-radius: 100%;
  }
`;

export const Border = styled.div`
  ${BorderStyle};
  height: 275px;
  width: 275px;
`;
