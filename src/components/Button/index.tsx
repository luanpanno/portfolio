import { PropsWithChildren } from 'react';

import { ButtonOutline, ButtonSolid } from './styles';

type Type = 'button' | 'submit' | 'reset' | undefined;
type Colors = 'primary' | 'secondary' | 'warning' | 'light';
type Props = {
  color?: Colors;
  outline?: boolean;
  type?: Type;
  rounded?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<PropsWithChildren<Props>> = ({
  color = 'primary',
  outline = false,
  type = 'button',
  disabled = false,
  rounded = false,
  onClick,
  children,
}) => {
  if (outline) {
    return (
      <ButtonOutline
        color={color}
        outline={outline}
        rounded={rounded}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonOutline>
    );
  }

  return (
    <ButtonSolid
      color={color}
      outline={outline}
      rounded={rounded}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonSolid>
  );
};

export default Button;
