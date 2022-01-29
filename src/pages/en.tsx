import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Homepage from '@containers/Home';

import Container from '@templates/Container';

const En: NextPage = () => (
  <Container>
    <Homepage />
  </Container>
);

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default En;
