import Image from 'next/image';
import React from 'react';

import NavLink from '@components/NavLink';

import { Container } from './styles';

const Flags = () => (
  <Container language={'pt-BR'}>
    <NavLink href="/" locale="pt" passHref>
      <Image
        src="/images/flags/br_4x3.svg"
        alt="Brazilian flag"
        className="flag"
        width={32}
        height={24}
      />
    </NavLink>
    <NavLink href="/" locale="en" passHref>
      <Image
        src="/images/flags/us_4x3.svg"
        alt="USA flag"
        className="flag"
        width={32}
        height={24}
      />
    </NavLink>
  </Container>
);

export default Flags;
