import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '@components/layout/Layout';

import HomeView from '@views/Home';

import { getYearsOfExperience } from '@utils/experience';
import { links } from '@utils/links';

const siteUrl = 'https://www.luanpanno.dev';
const socialImageUrl = `${siteUrl}/images/profile-pic.webp`;
const ONE_DAY_IN_SECONDS = 60 * 60 * 24;

type Props = {
  yearsOfExperience: number;
};

const Home: NextPage<Props> = ({ yearsOfExperience }) => {
  const { t } = useTranslation('common');
  const { locale = 'en' } = useRouter();
  const isPortuguese = locale === 'pt';
  const canonicalUrl = isPortuguese ? `${siteUrl}/pt` : siteUrl;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Luan Panno',
        jobTitle: t('homeJob'),
        description: t('websiteDescription'),
        email: `mailto:${links.email}`,
        url: siteUrl,
        image: socialImageUrl,
        worksFor: { '@type': 'Organization', name: 'LovelyStay' },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Rio de Janeiro',
          addressCountry: 'BR',
        },
        sameAs: [links.linkedin, links.github],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Luan Panno',
        inLanguage: ['en', 'pt-BR'],
        publisher: { '@id': `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{t('websiteTitle')}</title>
        <meta name="description" content={t('websiteDescription')} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="pt-BR" href={`${siteUrl}/pt`} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        <meta property="og:site_name" content="Luan Panno" />
        <meta property="og:title" content={t('websiteTitle')} />
        <meta property="og:description" content={t('websiteDescription')} />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Luan" />
        <meta property="profile:last_name" content="Panno" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={isPortuguese ? 'pt_BR' : 'en_US'} />
        <meta
          property="og:locale:alternate"
          content={isPortuguese ? 'en_US' : 'pt_BR'}
        />
        <meta property="og:image" content={socialImageUrl} />
        <meta property="og:image:alt" content={t('ogImageAlt')} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={t('websiteTitle')} />
        <meta name="twitter:description" content={t('websiteDescription')} />
        <meta name="twitter:image" content={socialImageUrl} />
        <meta name="twitter:image:alt" content={t('ogImageAlt')} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Layout>
        <HomeView yearsOfExperience={yearsOfExperience} />
      </Layout>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      yearsOfExperience: getYearsOfExperience(),
    },
    // Rebuild daily so the count updates after each August anniversary.
    revalidate: ONE_DAY_IN_SECONDS,
  };
}

export default Home;
