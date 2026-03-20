import styled from 'styled-components';

type Props = {
  $hasError?: boolean;
  $hasFocus?: boolean;
};

export const Container = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    padding-left: 4px;
    color: ${(props) => props.theme.colors.lightText};
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .error {
    color: ${(props) => props.theme.colors.red};
    font-size: 0.82rem;
    line-height: 1.5;
    margin: 0 4px;
  }
`;

export const InputWrapper = styled.div<Props>`
  display: flex;
  align-items: stretch;
  width: 100%;
  border: 1px solid
    ${(props) => {
      if (props.$hasError) {
        return props.theme.colors.red;
      }

      if (props.$hasFocus) {
        return props.theme.colors.primary;
      }

      return props.theme.colors.border;
    }};
  border-radius: 18px;
  background-color: ${(props) => props.theme.colors.surface};
  box-shadow: ${(props) =>
    props.$hasFocus ? `0 0 0 4px ${props.theme.colors.primarySoft}` : 'none'};

  input,
  textarea {
    width: 100%;
    min-width: 0;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.title};
    font-size: 1rem;
    line-height: 1.6;
    padding: 16px 18px;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${(props) => props.theme.colors.lightText};
    opacity: 0.8;
  }

  textarea {
    min-height: 170px;
    resize: vertical;
  }
`;
