import styled from 'styled-components';

type Props = {
  $hasError?: boolean;
  $hasFocus?: boolean;
};

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;

  label {
    font-size: 0.875rem;
    font-weight: 500;
  }

  .error {
    color: ${(props) => props.theme.colors.danger};
    font-size: 0.8125rem;
  }
`;

export const InputWrapper = styled.div<Props>`
  display: flex;
  width: 100%;
  border: 1px solid
    ${(props) => {
      if (props.$hasError) {
        return props.theme.colors.danger;
      }

      if (props.$hasFocus) {
        return props.theme.colors.accent;
      }

      return props.theme.colors.borderStrong;
    }};
  border-radius: 6px;
  box-shadow: ${(props) =>
    props.$hasFocus ? `0 0 0 1px ${props.theme.colors.accent}` : 'none'};
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  input,
  textarea {
    width: 100%;
    min-width: 0;
    padding: 10px 12px;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
    line-height: 1.5;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${(props) => props.theme.colors.muted};
    opacity: 1;
  }

  textarea {
    min-height: 140px;
    resize: vertical;
  }
`;
