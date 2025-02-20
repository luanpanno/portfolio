import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: var(--content-spacing);
  animation: slideUp 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const Content = styled.div`
  max-width: var(--body-max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--content-spacing);

  p {
    font-size: 0.9rem;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.text};
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  white-space: nowrap;

  button {
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &.accept {
      background-color: ${(props) => props.theme.colors.primary};
      color: #fff;

      &:hover {
        opacity: 0.9;
      }
    }

    &.reject {
      background-color: transparent;
      color: ${(props) => props.theme.colors.text};
      border: 1px solid ${(props) => props.theme.colors.light};

      &:hover {
        background-color: ${(props) => props.theme.colors.light};
      }
    }
  }
`;
