import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 32px var(--body-horizontal-gap);
  row-gap: 32px;
`;

export const Intro = styled.p`
  max-width: 640px;
  text-align: center;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.lightText};
`;
