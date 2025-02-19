import { createGlobalStyle } from 'styled-components';

export const ToastStyles = createGlobalStyle`
  :root {
    --toastify-color-light: ${({ theme }) => theme.colors.background};
    --toastify-color-dark: ${({ theme }) => theme.colors.background};
    --toastify-color-info: ${({ theme }) => theme.colors.primary};
    --toastify-color-success: ${({ theme }) => theme.colors.green};
    --toastify-color-warning: ${({ theme }) => theme.colors.yellow};
    --toastify-color-error: ${({ theme }) => theme.colors.red};
    --toastify-color-transparent: rgba(255, 255, 255, 0.7);
    --toastify-text-color-light: ${({ theme }) => theme.colors.text};
    --toastify-text-color-dark: ${({ theme }) => theme.colors.text};
    --toastify-spinner-color: ${({ theme }) => theme.colors.primary};
  }

  .Toastify__toast {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.light};
    border-radius: 8px;
    font-family: inherit;
  }

  .Toastify__close-button {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
    
    &:hover {
      opacity: 1;
    }
  }

  .Toastify__progress-bar {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
