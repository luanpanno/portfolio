import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: var(--page-gutter);
  bottom: var(--page-gutter);
  left: var(--page-gutter);
  z-index: 999;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 16px 24px;
  width: 100%;
  max-width: var(--page-width);
  padding: 16px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0 8px 24px
    rgba(0, 0, 0, ${(props) => (props.theme.mode === 'dark' ? 0.5 : 0.08)});

  p {
    font-size: 0.875rem;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  white-space: nowrap;

  button {
    flex: 1;
    min-height: 36px;
    padding: 0 14px;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: opacity 0.15s ease;
  }

  button:hover {
    opacity: 0.85;
  }

  button.accept {
    background-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.background};
  }

  button.reject {
    border: 1px solid ${(props) => props.theme.colors.borderStrong};
  }
`;
