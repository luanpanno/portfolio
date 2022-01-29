import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import Layout from '@templates/Layout';

const Container: NextPage = ({ children }) => {
  const { t } = useTranslation('common');

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
