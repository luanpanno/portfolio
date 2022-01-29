import type { NextPage } from 'next';

import Homepage from '@containers/Home';

import Container from '@templates/Container';

const Home: NextPage = () => (
  <Container>
    <Homepage />
  </Container>
);

export default Home;
