import styled from 'styled-components';

type Props = {
  hasError?: boolean;
  hasFocus?: boolean;
};

export const Container = styled.div<Props>`
  width: 100%;

  .error {
    color: ${(props) => props.theme.colors.red};
    font-size: 0.8rem;
    margin: 0 4px;
  }
`;

export const InputWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid
    ${(props) => (props.hasError ? props.theme.colors.red : '#eaeaea')};
  width: 100%;
  border-radius: 4px;
  box-shadow: ${(props) =>
    props.hasFocus && '0 1px 5px 1px rgba(0, 0, 0, 0.1)'};

  input,
  textarea {
    border-radius: 4px;
    font-size: 0.9rem;
    padding: 12px 16px;
    width: 100%;
    transition: all 200ms;
    border: none;
    outline: none;
    height: 100%;
  }

  textarea {
    min-height: 120px;
    resize: none;
  }
`;
