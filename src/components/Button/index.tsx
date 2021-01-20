import { Container } from './styles';

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: React.FC<Props> = ({ type = 'button', children }) => {
  return <Container type={type}>{children}</Container>;
};

export default Button;
