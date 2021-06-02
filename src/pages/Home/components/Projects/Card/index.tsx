import { Container } from './styles';

interface Props {
  image: string;
  text: string;
}

export const Card: React.FC<Props> = ({ image, text }) => {
  return (
    <Container>
      <div className="img-wrapper">
        <img src={image} alt="weather-check" />
      </div>
      <p>{text}</p>
    </Container>
  );
};
