import { HTMLAttributes, useState } from 'react';

import { Container, InputWrapper } from './styles';

type Props = HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {
  name: string;
  type?: string;
  id?: string;
  label?: string;
  errorMessage?: string;
  value?: string;
};

const Input: React.FC<Props> = ({
  name,
  type = 'text',
  id: providedId,
  label,
  errorMessage,
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

  const id = providedId || name;

  return (
    <Container hasError={!!errorMessage}>
      {label && <label htmlFor={id}>{label}</label>}
      <InputWrapper hasError={!!errorMessage} hasFocus={hasFocus}>
        {type === 'textarea' ? (
          <textarea
            id={id}
            onFocus={() => setHasFocus(true)}
            onBlur={handleBlur}
            name={name}
            {...props}
          />
        ) : (
          <input
            type={type}
            onFocus={() => setHasFocus(true)}
            onBlur={handleBlur}
            id={id}
            name={name}
            {...props}
          />
        )}
      </InputWrapper>
      {errorMessage && <span className="error">{errorMessage}</span>}
    </Container>
  );
};

export default Input;
