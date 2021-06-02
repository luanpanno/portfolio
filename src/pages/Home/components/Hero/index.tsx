import Backgroung from '@assets/img/background2.jpg';
import Button from '@components/Button';
import Typewriter from '@components/Typewriter';

import { Container } from './styles';

const Hero = () => {
  return (
    <Container imageSrc={Backgroung}>
      <div className="text">
        <p className="intro">
          Olá! Eu sou o <span className="name">Luan</span>
        </p>
        <Typewriter text="Desenvolvedor Front-End" />
        <Button>Saber mais</Button>
      </div>
    </Container>
  );
};

export default Hero;
