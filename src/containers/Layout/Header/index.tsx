import { Link } from 'react-router-dom';

import NavItem from './NavItem';
import { Container } from './styles';

interface Props {
  isInTop: boolean;
}

const Header: React.FC<Props> = ({ isInTop }) => {
  return (
    <Container isInTop={isInTop}>
      <div>
        <Link to="/" className="logo">
          Luan Panno
        </Link>
      </div>
      <nav>
        <ul>
          <NavItem to="#hero">Início</NavItem>
          <NavItem to="#about">Sobre</NavItem>
          <NavItem to="#projects">Projetos</NavItem>
          <NavItem to="#contact">Contato</NavItem>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
