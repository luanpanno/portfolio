import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Layout from '../containers/layout';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path="/" component={Home} />
        </Layout>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
