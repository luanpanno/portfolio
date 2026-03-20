import { HamburgerMenuButton, BarsContainer } from './styles';

type Props = {
  isMenuOpen: boolean;
  label: string;
  onClick: () => void;
};

const HamburgerMenu: React.FC<Props> = ({ isMenuOpen, label, onClick }) => (
  <HamburgerMenuButton
    type="button"
    aria-label={label}
    aria-expanded={isMenuOpen}
    aria-controls="main-navigation"
    onClick={onClick}
  >
    <BarsContainer className={`container ${isMenuOpen ? 'active' : ''}`.trim()}>
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </BarsContainer>
  </HamburgerMenuButton>
);

export default HamburgerMenu;
