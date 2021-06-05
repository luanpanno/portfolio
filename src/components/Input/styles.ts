import styled from 'styled-components';

interface Props {
  hasError?: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;
`;

export const InputWrapper = styled.div<Props>`
  width: 100%;

  input {
    padding: 16px;
    font-size: 0.9rem;
    border-radius: 4px;
    border: 1px solid #eaeaea;
    transition: all 200ms;
    width: 100%;

    &:focus {
      box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
    }
  }

  textarea {
    border: 1px solid #eaeaea;
    border-radius: 4px;
    font-size: 0.9rem;
    padding: 16px;
    height: 100%;
    min-height: 120px;
    resize: none;
    width: 100%;

    &:focus {
      box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
    }
  }
`;
