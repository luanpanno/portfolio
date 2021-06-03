import styled from 'styled-components';

interface Props {
  color?: string;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  svg {
    font-size: 2.5rem;
    fill: ${(props) => props.color};
  }

  span {
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.text};
  }
`;
