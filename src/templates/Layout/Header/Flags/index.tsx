import Image from 'next/image';
import React from 'react';

import Brazil from '@assets/imgs/flags/br_4x3.svg';
import USA from '@assets/imgs/flags/us_4x3.svg';

import NavLink from '@components/NavLink';

import { Container } from './styles';

const Flags = () => (
  <Container language={'pt-BR'}>
    <NavLink href="/" locale="pt" passHref>
      <Image src={Brazil} alt="Brazilian flag" className="flag" />
    </NavLink>
    <NavLink href="/" locale="en" passHref>
      <Image src={USA} alt="USA flag" className="flag" />
    </NavLink>
  </Container>
);

export default Flags;
