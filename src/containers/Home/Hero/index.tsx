import About from './About';
import ProfilePicture from './ProfilePicture';
import { Container, Content } from './styles';

const Hero = () => {
  return (
    <Container>
      <Content>
        <About />
        <ProfilePicture />
      </Content>
    </Container>
  );
};

export default Hero;
