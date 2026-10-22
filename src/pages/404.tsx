import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '@components/layout/Layout';

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  p {
    max-width: 44ch;
    color: ${(props) => props.theme.colors.muted};
  }

  a {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
  }
`;

const NotFoundPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{`${t('notFoundTitle')} | Luan Panno`}</title>
        <meta name="description" content={t('notFoundDescription')} />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Layout>
        <Content aria-labelledby="not-found-heading">
          <h1 id="not-found-heading">{t('notFoundTitle')}</h1>
          <p>{t('notFoundDescription')}</p>
          <Link href="/">{t('notFoundBack')}</Link>
        </Content>
      </Layout>
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
