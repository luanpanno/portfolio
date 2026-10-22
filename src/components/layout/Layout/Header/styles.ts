import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 24px;
  padding: 28px 0 0;
  font-size: 0.9375rem;

  .home {
    margin-right: auto;
    font-weight: 500;
  }

  @media screen and (max-width: 480px) {
    gap: 4px 16px;
    padding-top: 16px;
  }
`;

export const Nav = styled.nav`
  @media screen and (max-width: 480px) {
    order: 1;
    width: 100%;
  }

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
  }

  a {
    display: inline-block;
    padding: 6px 0;
    color: ${(props) => props.theme.colors.muted};
    transition: color 0.15s ease;
  }

  a:hover {
    color: ${(props) => props.theme.colors.text};
  }

  @media screen and (max-width: 480px) {
    ul {
      gap: 16px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
