import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Container from '@components/layout/Container';

import HomeView from '@views/Home';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const { locale = 'en' } = useRouter();
  const isPortuguese = locale === 'pt';
  const canonicalUrl = `https://www.luanpanno.dev${isPortuguese ? '/pt' : ''}`;
  const socialImageUrl = 'https://www.luanpanno.dev/images/profile-pic.webp';

  return (
    <>
      <Head>
        <title>{t('websiteTitle')}</title>
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://www.luanpanno.dev" />
        <link
          rel="alternate"
          hrefLang="pt-BR"
          href="https://www.luanpanno.dev/pt"
        />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
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
              image: socialImageUrl,
              address: {
                '@type': 'PostalAddress',
                addressLocality: t('homeLocation'),
              },
            }),
          }}
        />
        <meta name="description" content={t('websiteDescription')} />
        <meta property="og:site_name" content={t('websiteTitle')} />
        <meta property="og:title" content={t('websiteTitle')} />
        <meta property="og:description" content={t('websiteDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={isPortuguese ? 'pt_BR' : 'en_US'} />
        <meta
          property="og:locale:alternate"
          content={isPortuguese ? 'en_US' : 'pt_BR'}
        />
        <meta property="og:image" content={socialImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('websiteTitle')} />
        <meta name="twitter:description" content={t('websiteDescription')} />
        <meta name="twitter:image" content={socialImageUrl} />
        <meta name="twitter:url" content={canonicalUrl} />
      </Head>
      <Container>
        <HomeView />
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

export default Home;
