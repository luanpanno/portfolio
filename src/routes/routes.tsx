import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Layout from '../containers/layout';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Links from '../pages/Links';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/links" exact component={Links} />

        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/contact" exact component={Contact} />

          <Redirect to="/" />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
