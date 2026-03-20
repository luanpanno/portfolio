import { createGlobalStyle } from 'styled-components';

export const ToastStyles = createGlobalStyle`
  :root {
    --toastify-color-light: ${({ theme }) => theme.colors.surfaceElevated};
    --toastify-color-dark: ${({ theme }) => theme.colors.surfaceElevated};
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
    background-color: ${({ theme }) => theme.colors.surfaceElevated};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 18px;
    box-shadow: ${({ theme }) => theme.colors.shadow};
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
