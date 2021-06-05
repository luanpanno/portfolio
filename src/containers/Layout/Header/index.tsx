import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';

import NavItem from './NavItem';
import { Container, Menu } from './styles';

interface Props {
  isInTop: boolean;
}

const Header: React.FC<Props> = ({ isInTop }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container isInTop={isInTop} openMenu={openMenu}>
      <OutsideClickHandler onOutsideClick={() => setOpenMenu(false)}>
        <Link to="/" className="logo">
          Luan Panno
        </Link>
        <Menu isInTop={isInTop} openMenu={openMenu}>
          <ul className={openMenu ? 'active' : ''}>
            <NavItem to="#hero">Início</NavItem>
            <NavItem to="#about">Sobre</NavItem>
            <NavItem to="#projects">Projetos</NavItem>
            <NavItem to="#contact">Contato</NavItem>
          </ul>
        </Menu>
        <button
          type="button"
          className="burger"
          onClick={() => setOpenMenu((state) => !state)}
        >
          <FiMenu />
        </button>
      </OutsideClickHandler>
    </Container>
  );
};

export default Header;
