import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Container from '@components/layout/Container';

import Homepage from '@views/Home';

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
