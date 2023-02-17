import styled from 'styled-components';

export const Item = styled.li`
  a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    padding: 8px 4px;
    transition: all 100ms;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.colors.text};
    }

    @media screen and (max-width: 832px) {
      &:hover {
        border-bottom: 2px solid transparent;
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
