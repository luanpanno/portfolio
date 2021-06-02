import { Container } from './styles';

interface Props {
  color: string;
  text: string;
  icon: React.ReactElement;
}

export const Icon: React.FC<Props> = ({ color, text, icon }) => {
  return (
    <Container color={color}>
      <span>{text}</span>
      {icon}
    </Container>
  );
};
