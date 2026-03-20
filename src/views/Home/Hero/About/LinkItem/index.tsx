import { PropsWithChildren } from 'react';

type Props = {
  href: string;
  title: string;
  ariaLabel: string;
};

const LinkItem: React.FC<PropsWithChildren<Props>> = ({
  href,
  title,
  ariaLabel,
  children,
}) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  </li>
);

export default LinkItem;
