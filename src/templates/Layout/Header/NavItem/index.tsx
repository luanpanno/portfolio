// import { NavLink } from 'react-router-dom';

import { Item } from './styles';

type Props = {
  to: string;
};

const NavItem: React.FC<Props> = ({ to, children }) => (
  <Item>
    <a href={to}>{children}</a>
  </Item>
);

export default NavItem;
