import { PropsWithChildren } from 'react';

import { Item } from './styles';

type Props = {
  to: string;
};

const NavItem: React.FC<PropsWithChildren<Props>> = ({ to, children }) => (
  <Item>
    <a href={to}>{children}</a>
  </Item>
);

export default NavItem;
