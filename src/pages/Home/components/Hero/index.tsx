import Backgroung from '@assets/img/hero-background.jpg';
import Button from '@components/Button';
import Typewriter from '@components/Typewriter';

import { Container, TextContainer } from './styles';

const Hero = () => {
  return (
    <Container imageSrc={Backgroung} id="hero">
      <TextContainer>
        <p className="intro">
          Olá! Eu sou o <span className="name">Luan</span>
        </p>
        <Typewriter text="Desenvolvedor Front-End" />
        <Button>Saber mais</Button>
      </TextContainer>
    </Container>
  );
};

export default Hero;
