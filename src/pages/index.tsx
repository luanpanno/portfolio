import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Homepage from '@containers/Home';

import Container from '@templates/Container';

const Home: NextPage = () => (
  <Container>
    <Homepage />
  </Container>
);

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
