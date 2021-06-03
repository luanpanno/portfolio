import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  div,
  a {
    display: flex;
    align-items: center;
    gap: 4px;
    border-bottom: 1px solid transparent;
  }

  a:hover {
    /* text-decoration: underline; */
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }

  svg {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.primary};
  }

  span {
    color: #555;
  }
`;
