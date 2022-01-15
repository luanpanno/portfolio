// import { NavLink } from 'react-router-dom';

import { Item } from './styles';

interface Props {
  to: string;
}

const NavItem: React.FC<Props> = ({ to, children }) => {
  return (
    <Item>
      <a href={to}>{children}</a>
    </Item>
  );
};

export default NavItem;
