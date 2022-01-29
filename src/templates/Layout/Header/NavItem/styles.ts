import styled from 'styled-components';

export const Item = styled.li`
  a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    padding: 8px 4px;
    transition: all 100ms;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.colors.text};
    }
  }
`;
