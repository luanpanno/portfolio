import { PropsWithChildren } from 'react';

type Props = {
  href: string;
  title: string;
};

const LinkItem: React.FC<PropsWithChildren<Props>> = ({
  href,
  title,
  children,
}) => (
  <a href={href} target="_blank" rel="noreferrer" title={title}>
    {children}
  </a>
);

export default LinkItem;
