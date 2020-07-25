import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import NavigationProvider from "./context/Navigation/Provider";
import PageProvider from "./context/Pages/Provider";
import Navigation from "./molecules/Navigation/Navigation";
import { GlobalStyle, theme } from "./utils/theme/theme";
import { ThemeProvider } from "styled-components";
import Routes from "./templates/Routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <NavigationProvider>
          <Navigation />
          <PageProvider>
            <Routes />
          </PageProvider>
        </NavigationProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
