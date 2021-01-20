import { Link } from 'react-router-dom';

import Button from '../../../components/Button';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Link to="/" className="logo">
        Luan Panno
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/experience">Experiência</Link>
          </li>
          <li>
            <Link to="/contact">
              <Button>Contato</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
