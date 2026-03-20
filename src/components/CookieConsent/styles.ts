import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 20px;
  z-index: 999;
  display: flex;
  justify-content: center;
  animation: slideUp 0.3s ease-in-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 20px;
  border: 1px solid ${(props) => props.theme.colors.borderStrong};
  border-radius: 24px;
  background-color: ${(props) => props.theme.colors.surface};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: ${(props) => props.theme.colors.shadowStrong};

  p {
    color: ${(props) => props.theme.colors.text};
    font-size: 0.95rem;
    line-height: 1.7;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    text-align: left;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;

  button {
    padding: 12px 16px;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
  }

  button.accept {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => (props.theme.mode === 'dark' ? '#0d1419' : '#ffffff')};
  }

  button.reject {
    background-color: ${(props) => props.theme.colors.surfaceElevated};
    color: ${(props) => props.theme.colors.title};
    border: 1px solid ${(props) => props.theme.colors.border};
  }

  button:hover {
    transform: translateY(-1px);
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    button {
      flex: 1;
      justify-content: center;
    }
  }
`;
