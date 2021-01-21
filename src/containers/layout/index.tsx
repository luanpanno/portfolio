import Button from '../../components/Button';
import Footer from './Footer';
// import Header from './Header';
import { Container, Main } from './styles';

const Layout: React.FC = () => {
  // const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <h1>Luan Panno | Desenvolvedor Front-End</h1>
      <Main>
        <p>Em breve!</p>
        <span className="description">Site em construção</span>
        <span
          role="img"
          aria-label="under-construction"
          title="Em construção"
          className="emoji"
        >
          🚧
        </span>
        <a href="https://luanpanno.github.io">
          <Button rounded>Acessar site antigo</Button>
        </a>
      </Main>
      {/* <Header /> */}
      {/* <Main>{children}</Main> */}
      <Footer />
    </Container>
  );
};

export default Layout;
