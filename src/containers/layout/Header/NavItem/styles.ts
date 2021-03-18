import styled from 'styled-components';

export const Item = styled.li`
  a {
    color: white;
    text-decoration: none;
    padding: 26px 10px;
    transition: all 100ms;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme.colors.secondary};
    }
  }

  .active {
    border-bottom: 3px solid ${(props) => props.theme.colors.primary};
  }
`;
