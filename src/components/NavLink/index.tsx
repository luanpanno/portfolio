import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavLink: React.FC<React.PropsWithChildren<LinkProps>> = ({
  href,
  children,
  locale,
  ...props
}) => {
  const child = React.Children.only(children) as any;
  const router = useRouter();

  return (
    <Link href={href} locale={locale} {...props}>
      {React.cloneElement(child, {
        className: router.locale === locale ? 'active' : '',
      })}
    </Link>
  );
};

export default NavLink;
