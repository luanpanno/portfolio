import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 32px var(--body-horizontal-gap);
  row-gap: 32px;
`;
