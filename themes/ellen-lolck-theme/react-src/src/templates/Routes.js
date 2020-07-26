import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import PageContext from "../context/Pages/Context";
import FrontPage from "../views/FrontPage/FrontPage";
import PageNotFound from "../views/PageNotFound/PageNotFound";
import Page from "./Page/Page";
import Loading from "../atoms/Loading/Loading";

const Routes = () => {
  const { isLoading, pages } = useContext(PageContext);
  const pageRoutes = () =>
    Object.values(pages.bySlug).map((page) => {
      if (page.slug === "forside") {
        return <Route exact key={page.slug} path={`/ellen-lolck/`} render={() => <FrontPage {...page} />} />;
      }
      return <Route key={page.slug} exact path={`/ellen-lolck${page.parent ? "/" + page.parent : ""}/${page.slug}`} render={() => <Page {...page} />} />;
    });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Switch>
      {pageRoutes()}
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
