import { HTMLAttributes, useState } from 'react';
import { IoMdAlert } from 'react-icons/io';

import { Container, InputWrapper } from './styles';

type Props = HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {
  name: string;
  label?: string;
  type?: string;
  id?: string;
  hasError?: boolean;
  errorText?: string;
  value?: string;
};

const Input: React.FC<Props> = ({
  name,
  label,
  type = 'text',
  id,
  hasError,
  errorText,
  onBlur,
  ...props
}) => {
  const [hasFocus, setHasFocus] = useState(false);

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    if (onBlur) onBlur(e);

    setHasFocus(false);
  }

  if (type === 'textarea') {
    return (
      <Container hasError={hasError}>
        <label htmlFor={id ?? name}>{label}</label>
        <InputWrapper hasError={hasError} hasFocus={hasFocus}>
          <textarea
            id={id}
            onFocus={() => setHasFocus(true)}
            onBlur={handleBlur}
            name={name}
            {...props}
          />
          {hasError && errorText && <IoMdAlert title={errorText} />}
        </InputWrapper>
      </Container>
    );
  }

  return (
    <Container hasError={hasError}>
      <label htmlFor={id ?? name}>{label}</label>
      <InputWrapper hasError={hasError} hasFocus={hasFocus}>
        <input
          type={type}
          onFocus={() => setHasFocus(true)}
          onBlur={handleBlur}
          id={id}
          name={name}
          {...props}
        />
        {hasError && errorText && <IoMdAlert title={errorText} />}
      </InputWrapper>
    </Container>
  );
};

export default Input;
