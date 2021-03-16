import { Link } from 'react-router-dom';

import NavItem from './NavItem';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <div>
        <Link to="/" className="logo">
          Luan Panno
        </Link>
      </div>
      <nav>
        <ul>
          <NavItem to="/">Início</NavItem>
          <NavItem to="/about">Sobre</NavItem>
          <NavItem to="/projects">Projetos</NavItem>
          <NavItem to="/contact">Contato</NavItem>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
