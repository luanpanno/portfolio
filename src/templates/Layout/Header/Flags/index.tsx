import Image from 'next/image';
import React from 'react';

import Brazil from '@assets/imgs/flags/brazil.png';
import USA from '@assets/imgs/flags/usa.png';

import NavLink from '@components/NavLink';

import { Container } from './styles';

const Flags = () => (
  <Container language={'pt-BR'}>
    <NavLink href="/" locale="pt" passHref>
      <button>
        <Image src={Brazil} alt="brazilian-flag" height="650px" />
      </button>
    </NavLink>
    <NavLink href="/" locale="en" passHref>
      <button>
        <Image src={USA} alt="usa-flag" height="650px" />
      </button>
    </NavLink>
  </Container>
);

export default Flags;
