import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 24px;
  padding: 24px 0;

  span {
    color: ${(props) => props.theme.colors.text};
    text-transform: uppercase;
    letter-spacing: 4px;
  }
`;
