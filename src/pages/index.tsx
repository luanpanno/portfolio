import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import Container from '@components/layout/Container';

const Homepage = dynamic(() => import('@views/Home'), {
  loading: () => <div>Loading...</div>,
});

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('websiteTitle')}</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Luan Panno',
              jobTitle: t('homeJob'),
              description: t('websiteDescription'),
              email: 'luanpanno@gmail.com',
              url: 'https://www.luanpanno.dev',
              sameAs: [
                'https://www.linkedin.com/in/luanpanno',
                'https://www.github.com/luanpanno',
              ],
              image: 'https://www.luanpanno.dev/og-image.jpg',
              address: {
                '@type': 'PostalAddress',
                addressLocality: t('homeLocation'),
              },
            }),
          }}
        />
        <meta name="description" content={t('websiteDescription')} />
        <meta property="og:title" content={t('websiteTitle')} />
        <meta property="og:description" content={t('websiteDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.luanpanno.dev" />
        <meta
          property="og:image"
          content="https://www.luanpanno.dev/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('websiteTitle')} />
        <meta name="twitter:description" content={t('websiteDescription')} />
        <meta
          name="twitter:image"
          content="https://luanpanno.vercel.app/og-image.jpg"
        />
      </Head>
      <Container>
        <Homepage />
      </Container>
    </>
  );
};

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
