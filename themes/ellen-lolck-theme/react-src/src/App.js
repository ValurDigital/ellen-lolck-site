import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationProvider from "./components/Navigation/context/Provider";
import PageProvider from "./context/Pages/Provider";
import SeoHelmet from "./components/SeoHelmet";
import Navigation from "./components/Navigation/Navigation";
import FrontPage from "./views/FrontPage/FrontPage";
import Page from "./views/Page/Page";
import PageNotFound from "./views/PageNotFound/PageNotFound";
import { GlobalStyle, theme } from "./utils/theme/theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <NavigationProvider>
          <Navigation />
          <PageProvider>
            <Switch>
              <Route path="/ellen-lolck/" component={FrontPage} exact />
              <Route path="/ellen-lolck/:slug" component={Page} />
            </Switch>
          </PageProvider>
        </NavigationProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
