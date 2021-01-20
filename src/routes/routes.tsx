import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Layout from '../containers/layout';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path="/" component={Home} />
          <Route path="/about" component={Home} />
          <Route path="/projects" component={Home} />
          <Route path="/experience" component={Home} />
          <Route path="/contact" component={Home} />

          <Redirect to="/" />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
