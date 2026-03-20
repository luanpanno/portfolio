import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import Container from '@components/layout/Container';

const NotFoundPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{`${t('websiteTitle')} | 404`}</title>
        <meta
          name="description"
          content="The page you are looking for could not be found."
        />
      </Head>
      <Container>
        <section
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
          }}
        >
          <h1>404</h1>
          <p>The page you are looking for could not be found.</p>
        </section>
      </Container>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default NotFoundPage;
