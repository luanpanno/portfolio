import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import Layout from '@components/Layout';

const Container: NextPage = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>{t('websiteTitle')}</title>
        <meta name="description" content={t('websiteDescription')} />
      </Head>

      <main>
        <Layout>{children}</Layout>
      </main>
    </div>
  );
};

export default Container;
