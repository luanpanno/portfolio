import type { NextPage } from 'next';
import { PropsWithChildren } from 'react';

import Layout from '../Layout';

const Container: NextPage<PropsWithChildren> = ({ children }) => (
  <div>
    <Layout>{children}</Layout>
  </div>
);

export default Container;
