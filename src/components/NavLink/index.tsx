import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavLink: React.FC<React.PropsWithChildren<LinkProps>> = ({
  href,
  children,
  locale,
  ...props
}) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      locale={locale}
      {...props}
      className={router.locale === locale ? 'active' : ''}
    >
      {children}
    </Link>
  );
};

export default NavLink;
