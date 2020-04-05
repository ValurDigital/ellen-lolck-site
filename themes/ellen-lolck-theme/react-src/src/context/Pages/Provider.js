import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { createAction } from "../../utils/createAction";
import PageContext from "./Context";
import { PAGES_API_URL } from "../../utils/api/constants";

export const initialState = {
  isLoading: true,
  pages: null,
  currentPage: null,
};

// Actions
const request = () => createAction("request");
const success = (pages) => createAction("success", pages);

const reducer = (state, action) => {
  switch (action.type) {
    case "request":
      return { ...state, isLoading: true };
    case "success":
      return {
        ...state,
        isLoading: false,
        pages: {
          bySlug: action.payload.reduce((acc, page) => {
            acc[page.slug] = page;
            return acc;
          }, {}),
          allIds: action.payload.map((page) => page.id),
        },
      };

    default:
      return state;
  }
};

const PageProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(request());
    fetch(PAGES_API_URL)
      .then((res) => res.json())
      .then((pages) => dispatch(success(pages)));
  }, []);

  return <PageContext.Provider value={state}>{children}</PageContext.Provider>;
};

export default PageProvider;
