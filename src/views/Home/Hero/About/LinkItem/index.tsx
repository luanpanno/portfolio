import { PropsWithChildren } from 'react';

type Props = {
  href: string;
  title: string;
  ariaLabel: string;
  label: string;
  openInNewTab?: boolean;
};

const LinkItem: React.FC<PropsWithChildren<Props>> = ({
  href,
  title,
  ariaLabel,
  label,
  openInNewTab = true,
  children,
}) => (
  <li>
    <a
      href={href}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
      title={title}
      aria-label={ariaLabel}
    >
      <span className="icon">{children}</span>
      <span className="label">{label}</span>
    </a>
  </li>
);

export default LinkItem;
