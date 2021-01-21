import styled from 'styled-components';

export const Container = styled.footer`
  height: 60px;
  color: white;
  background-color: ${(props) => props.theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
  text-align: center;
`;
