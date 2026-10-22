import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 24px;
  padding: 24px 0 32px;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.muted};
  font-size: 0.875rem;

  a {
    padding: 4px 0;
    transition: color 0.15s ease;
  }

  a:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;
