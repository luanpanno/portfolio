import type { NextPage } from 'next';

import Container from '@containers/Container';
import Homepage from '@containers/Home';

const Home: NextPage = () => (
  <Container>
    <Homepage />
  </Container>
);

export default Home;
