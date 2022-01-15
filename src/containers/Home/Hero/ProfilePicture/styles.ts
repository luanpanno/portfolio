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
  height: 250px;
  width: 250px;
`;

export const Border = styled.div`
  ${BorderStyle};
  height: 225px;
  width: 225px;
`;

export const Image = styled.img`
  overflow: hidden;
  height: 200px;
  width: 200px;
  border-radius: 100%;
`;
