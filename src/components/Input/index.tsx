import { HTMLAttributes } from 'react';
import { IoMdAlert } from 'react-icons/io';

import { Container, InputWrapper } from './styles';

interface Props extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  name?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  hasError?: boolean;
  errorText?: unknown;
  value?: string;
}

export const Input: React.FC<Props> = ({
  name,
  label,
  placeholder,
  type = 'text',
  id,
  hasError,
  ...props
}) => {
  if (type === 'textarea') {
    return (
      <Container hasError={hasError}>
        <InputWrapper hasError={hasError}>
          <textarea {...props} />
        </InputWrapper>
      </Container>
    );
  }

  return (
    <Container hasError={hasError}>
      <label htmlFor={id ?? name}>{label}</label>
      <InputWrapper hasError={hasError}>
        <input type={type} {...props} />
        <IoMdAlert />
      </InputWrapper>
    </Container>
  );
};
