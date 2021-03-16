import { NavLink } from 'react-router-dom';

import { Item } from './styles';

interface Props {
  to: string;
}

const NavItem: React.FC<Props> = ({ to, children }) => {
  return (
    <Item>
      <NavLink exact to={to}>
        {children}
      </NavLink>
    </Item>
  );
};

export default NavItem;
