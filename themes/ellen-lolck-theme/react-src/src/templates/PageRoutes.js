import React, { useContext, useEffect, useState } from "react";
import Route, { useHistory, useRouteMatch } from "react-router-dom";
import PageContext from "../context/Pages/Context";
import Page from "../views/Page/Page";
import Loading from "../atoms/Loading/Loading";

const PageRoutes = () => {
  const history = useHistory();
  const match = useRouteMatch(window.location.pathname);
  const { isLoading, pages } = useContext(PageContext);
  return <Loading />;
};

// PageRoutes.defaultProps = {};

PageRoutes.propTypes = {};

export default PageRoutes;
