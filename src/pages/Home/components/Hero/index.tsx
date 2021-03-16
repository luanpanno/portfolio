import Draw from '../../../../assets/img/undraw-code-thinking.svg';
import Typewriter from '../../../../components/Typewriter';
import { Container } from './styles';

const Hero = () => {
  return (
    <Container>
      <div className="text">
        <p className="intro">
          Olá! Eu sou o <span className="name">Luan</span>
        </p>
        <Typewriter text="Desenvolvedor Front-End" />
      </div>

      <div className="draw">
        <img src={Draw} alt="" />
      </div>
    </Container>
  );
};

export default Hero;
