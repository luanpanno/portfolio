import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Container from '@components/layout/Container';

const NotFoundPage = () => {
  const { t } = useTranslation('common');
  const { locale = 'en' } = useRouter();
  const canonicalUrl = `https://www.luanpanno.dev${
    locale === 'pt' ? '/pt' : ''
  }/404`;

  return (
    <>
      <Head>
        <title>{`${t('notFoundTitle')} | ${t('websiteTitle')}`}</title>
        <meta name="description" content={t('notFoundDescription')} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={canonicalUrl} />
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
          <p>{t('notFoundDescription')}</p>
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
