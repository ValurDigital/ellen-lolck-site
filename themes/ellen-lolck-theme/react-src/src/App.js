import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationProvider from './components/Navigation/context/Provider';
import PageProvider from './context/Pages/Provider';
import SeoHelmet from './components/SeoHelmet';
import Navigation from './components/Navigation/Navigation';
import FrontPage from './views/FrontPage/FrontPage';
import Page from './views/Page/Page';
import PageNotFound from './views/PageNotFound/PageNotFound';

const App = () => {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <Navigation />
        <PageProvider>
          <Switch>
            <Route path="/ellen-lolck/" component={FrontPage} exact />
            <Route path="/ellen-lolck/:slug" component={Page} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </PageProvider>
      </NavigationProvider>
    </BrowserRouter>
  );
};

export default App;
