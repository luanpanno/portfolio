import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
