import styled from 'styled-components';

export const Lead = styled.p`
  max-width: 52ch;
`;

export const Email = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 16px;
  margin-top: 20px;

  a {
    font-size: clamp(1.375rem, 1rem + 1.6vw, 1.75rem);
    font-weight: 500;
    letter-spacing: -0.015em;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.borderStrong};
    text-decoration-thickness: 1px;
    text-underline-offset: 6px;
    transition: text-decoration-color 0.15s ease;
  }

  a:hover {
    text-decoration-color: currentColor;
  }

  button {
    min-height: 32px;
    padding: 0 12px;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 6px;
    color: ${(props) => props.theme.colors.muted};
    font-size: 0.8125rem;
    font-weight: 500;
    transition:
      color 0.15s ease,
      border-color 0.15s ease;
  }

  button:hover {
    border-color: ${(props) => props.theme.colors.borderStrong};
    color: ${(props) => props.theme.colors.text};
  }
`;
