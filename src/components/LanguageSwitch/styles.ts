import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;

  a {
    display: inline-grid;
    place-items: center;
    min-width: 32px;
    height: 32px;
    padding: 0 4px;
    border-radius: 6px;
    color: ${(props) => props.theme.colors.muted};
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    transition:
      color 0.15s ease,
      background-color 0.15s ease;
  }

  a:hover {
    color: ${(props) => props.theme.colors.text};
  }

  a[aria-current='true'] {
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.surface};
  }
`;
