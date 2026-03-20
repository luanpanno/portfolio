import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 24px;
  padding: 8px var(--body-horizontal-gap) 24px;

  span {
    color: ${(props) => props.theme.colors.lightText};
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    text-align: center;
  }
`;
