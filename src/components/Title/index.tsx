import { Container, Border } from './styles';

const Title: React.FC = ({ children }) => {
  return (
    <Container>
      <div>
        <h2>{children}</h2>
        <Border />
      </div>
    </Container>
  );
};

export default Title;
