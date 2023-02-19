import { HamburgerMenuButton, BarsContainer } from './styles';

type Props = {
  isMenuOpen: boolean;
  onClick: () => void;
};

const HamburgerMenu: React.FC<Props> = ({ isMenuOpen, onClick }) => (
  <HamburgerMenuButton type="button" title="Menu" onClick={onClick}>
    <BarsContainer className={`container ${isMenuOpen ? 'active' : ''}`.trim()}>
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </BarsContainer>
  </HamburgerMenuButton>
);

export default HamburgerMenu;
