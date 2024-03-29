import React, { useEffect } from "react";
import { groupBy } from "lodash";
import { createAction } from "../../utils/createAction";
import NavigationContext from "./Context";
import { MAIN_MENU_API_URL } from "../../utils/api/constants";

export const initialState = {
  isLoading: true,
  menuLinks: null,
};
const normalizeMenu = (menu) => {
  return groupBy(menu, "menu_item_parent");
};
// Actions
const request = () => createAction("request");
const success = (menus) => createAction("success", menus);

const reducer = (state, action) => {
  switch (action.type) {
    case "request":
      return { ...state, isLoading: true };
    case "success":
      return {
        ...state,
        isLoading: false,
        menuLinks: groupBy(action.payload, "menu_item_parent"),
      };

    default:
      return state;
  }
};

const NavigationProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(request());
    fetch(MAIN_MENU_API_URL)
      .then((res) => res.json())
      .then((menus) => dispatch(success(menus)));
  }, []);

  return <NavigationContext.Provider value={state}>{children}</NavigationContext.Provider>;
};

export default NavigationProvider;
