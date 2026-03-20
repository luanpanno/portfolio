import { PropsWithChildren } from 'react';

import { Item } from './styles';

type Props = {
  to: string;
  onClick?: () => void;
};

const NavItem: React.FC<PropsWithChildren<Props>> = ({
  to,
  onClick,
  children,
}) => (
  <Item>
    <a href={to} onClick={onClick}>
      {children}
    </a>
  </Item>
);

export default NavItem;
