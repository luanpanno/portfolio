import Draw from '../../../../assets/img/undraw-code-thinking.svg';
import { Container } from './styles';

const Hero = () => {
  return (
    <Container>
      <div className="text">
        <p className="intro">
          Olá! Eu sou o <span className="name">Luan</span>
        </p>
        <p className="occupation">Desenvolvedor Front-End</p>
      </div>

      <div>
        <img src={Draw} alt="" />
      </div>
    </Container>
  );
};

export default Hero;
