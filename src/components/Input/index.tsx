import { InputHTMLAttributes, TextareaHTMLAttributes, useState } from 'react';

import { Container, InputWrapper } from './styles';

type Props = (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
) & {
  name: string;
  type?: string;
  id?: string;
  label?: string;
  errorMessage?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
};

const Input: React.FC<Props> = ({
  name,
  type = 'text',
  id: providedId,
  label,
  errorMessage,
  onBlur,
  required,
  ...props
}) => {
  const [hasFocus, setHasFocus] = useState(false);

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    if (onBlur) {
      (onBlur as (event: React.FocusEvent<HTMLElement>) => void)(e);
    }

    setHasFocus(false);
  }

  const id = providedId || name;
  const errorId = errorMessage ? `${id}-error` : undefined;
  const commonProps = {
    id,
    name,
    'aria-describedby': errorId,
    'aria-invalid': !!errorMessage,
    'aria-required': required,
  };

  return (
    <Container $hasError={!!errorMessage}>
      {label && <label htmlFor={id}>{label}</label>}
      <InputWrapper $hasError={!!errorMessage} $hasFocus={hasFocus}>
        {type === 'textarea' ? (
          <textarea
            onFocus={() => setHasFocus(true)}
            onBlur={handleBlur}
            {...commonProps}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            type={type}
            onFocus={() => setHasFocus(true)}
            onBlur={handleBlur}
            {...commonProps}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
      </InputWrapper>
      {errorMessage && (
        <span id={errorId} className="error">
          {errorMessage}
        </span>
      )}
    </Container>
  );
};

export default Input;
