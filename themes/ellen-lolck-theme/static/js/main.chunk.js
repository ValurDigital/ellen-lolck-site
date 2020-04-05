(this["webpackJsonpellen-lolck-theme"] = this["webpackJsonpellen-lolck-theme"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Navigation_context_Provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navigation/context/Provider */ "./src/components/Navigation/context/Provider.js");
/* harmony import */ var _context_Pages_Provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/Pages/Provider */ "./src/context/Pages/Provider.js");
/* harmony import */ var _components_SeoHelmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SeoHelmet */ "./src/components/SeoHelmet.js");
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Navigation/Navigation */ "./src/components/Navigation/Navigation.js");
/* harmony import */ var _views_FrontPage_FrontPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/FrontPage/FrontPage */ "./src/views/FrontPage/FrontPage.js");
/* harmony import */ var _views_Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/Page/Page */ "./src/views/Page/Page.js");
/* harmony import */ var _views_PageNotFound_PageNotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/PageNotFound/PageNotFound */ "./src/views/PageNotFound/PageNotFound.js");
var _jsxFileName = "/Users/villadsvalur/Developer/ValurDigital/ellen-lolck-site/themes/ellen-lolck-theme/react-src/src/App.js";










const App = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation_context_Provider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_Pages_Provider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/ellen-lolck/",
    component: _views_FrontPage_FrontPage__WEBPACK_IMPORTED_MODULE_6__["default"],
    exact: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/ellen-lolck/:slug",
    component: _views_Page_Page__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "*",
    component: _views_PageNotFound_PageNotFound__WEBPACK_IMPORTED_MODULE_8__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Navigation/Navigation.js":
/*!*************************************************!*\
  !*** ./src/components/Navigation/Navigation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/Context */ "./src/components/Navigation/context/Context.js");
var _jsxFileName = "/Users/villadsvalur/Developer/ValurDigital/ellen-lolck-site/themes/ellen-lolck-theme/react-src/src/components/Navigation/Navigation.js";






const Navigation = () => {
  const {
    menuLinks
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_4__["default"]);

  if (menuLinks) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    }, menuLinks.map(link => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      key: link.slug,
      className: link.classes,
      to: `/ellen-lolck/${link.slug}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, link.title)));
  }

  return null;
}; // Navigation.defaultProps = {};


Navigation.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./src/components/Navigation/context/Context.js":
/*!******************************************************!*\
  !*** ./src/components/Navigation/context/Context.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const NavigationContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
NavigationContext.displayName = "NavigationContext";
/* harmony default export */ __webpack_exports__["default"] = (NavigationContext);

/***/ }),

/***/ "./src/components/Navigation/context/Provider.js":
/*!*******************************************************!*\
  !*** ./src/components/Navigation/context/Provider.js ***!
  \*******************************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/createAction */ "./src/utils/createAction.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ "./src/components/Navigation/context/Context.js");
/* harmony import */ var _utils_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/api/constants */ "./src/utils/api/constants.js");
var _jsxFileName = "/Users/villadsvalur/Developer/ValurDigital/ellen-lolck-site/themes/ellen-lolck-theme/react-src/src/components/Navigation/context/Provider.js";




const initialState = {
  isLoading: true,
  menuLinks: null
}; // Actions

const request = () => Object(_utils_createAction__WEBPACK_IMPORTED_MODULE_1__["createAction"])("request");

const success = menus => Object(_utils_createAction__WEBPACK_IMPORTED_MODULE_1__["createAction"])("success", menus);

const reducer = (state, action) => {
  switch (action.type) {
    case "request":
      return { ...state,
        isLoading: true
      };

    case "success":
      return { ...state,
        isLoading: false,
        menuLinks: action.payload
      };

    default:
      return state;
  }
};

const NavigationProvider = ({
  children
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(reducer, initialState);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(request());
    fetch(_utils_api_constants__WEBPACK_IMPORTED_MODULE_3__["MAIN_MENU_API_URL"]).then(res => res.json()).then(menus => dispatch(success(menus)));
  }, []);

  if (!state.isLoading) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
      value: state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, children);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Loading all of this...");
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationProvider);

/***/ }),

/***/ "./src/components/SeoHelmet.js":
/*!*************************************!*\
  !*** ./src/components/SeoHelmet.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/villadsvalur/Developer/ValurDigital/ellen-lolck-site/themes/ellen-lolck-theme/react-src/src/components/SeoHelmet.js";





const SeoHelmet = ({
  seoData
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, seoData.metaTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: seoData.metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:site_name",
    content: seoData.metaTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: seoData.ogImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:locale",
    content: seoData.locale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: seoData.ogTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: seoData.ogDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "twitter:image",
    content: seoData.twitterImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "twitter:title",
    content: seoData.twitterTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "twitter:description",
    content: seoData.twitterDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }));
}; // SeoHelmet.defaultProps = {};


SeoHelmet.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SeoHelmet);

/***/ }),

/***/ "./src/context/Pages/Context.js":
/*!**************************************!*\
  !*** ./src/context/Pages/Context.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PageContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
PageContext.displayName = "PageContext";
/* harmony default export */ __webpack_exports__["default"] = (PageContext);

/***/ }),

/***/ "./src/context/Pages/Provider.js":
/*!***************************************!*\
  !*** ./src/context/Pages/Provider.js ***!
  \***************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_createAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/createAction */ "./src/utils/createAction.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context */ "./src/context/Pages/Context.js");
/* harmony import */ var _utils_api_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/api/constants */ "./src/utils/api/constants.js");
var _jsxFileName = "/Users/villadsvalur/Developer/ValurDigital/ellen-lolck-site/themes/ellen-lolck-theme/react-src/src/context/Pages/Provider.js";





const initialState = {
  isLoading: true,
  pages: null,
  currentPage: null
}; // Actions

const request = () => Object(_utils_createAction__WEBPACK_IMPORTED_MODULE_2__["createAction"])("request");

const success = pages => Object(_utils_createAction__WEBPACK_IMPORTED_MODULE_2__["createAction"])("success", pages);

const reducer = (state, action) => {
  switch (action.type) {
    case "request":
      return { ...state,
        isLoading: true
      };

    case "success":
      return { ...state,
        isLoading: false,
        pages: {
          bySlug: action.payload.reduce((acc, page) => {
            acc[page.slug] = page;
            return acc;
          }, {}),
          allIds: action.payload.map(page => page.id)
        }
      };

    default:
      return state;
  }
};

const PageProvider = ({
  children
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(reducer, initialState);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(request());
    fetch(_utils_api_constants__WEBPACK_IMPORTED_MODULE_4__["PAGES_API_URL"]).then(res => res.json()).then(pages => dispatch(success(pages)));
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (PageProvider);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/villadsvalur/Developer/ValurDigital/ellen-lolck-site/themes/ellen-lolck-theme/react-src/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/utils/api/constants.js":
/*!************************************!*\
  !*** ./src/utils/api/constants.js ***!
  \************************************/
/*! exports provided: PAGES_API_URL, API_PAGE_BY_SLUG, MAIN_MENU_API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGES_API_URL", function() { return PAGES_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_PAGE_BY_SLUG", function() { return API_PAGE_BY_SLUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_MENU_API_URL", function() { return MAIN_MENU_API_URL; });
const API_BASE = "/ellen-lolck/wp-json/better-rest-endpoints/v1";
const PAGES_API_URL = `${API_BASE}/pages`;
const API_PAGE_BY_SLUG = `${API_BASE}/pages?slug=`;
const MAIN_MENU_API_URL = `${API_BASE}/menus/main`;

/***/ }),

/***/ "./src/utils/createAction.js":
/*!***********************************!*\
  !*** ./src/utils/createAction.js ***!
  \***********************************/
/*! exports provided: createAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
const createAction = (type, payload, meta) => {
  if (typeof payload === "undefined" && typeof meta === "undefined") {
    return {
      type
    };
  } else if (typeof meta === "undefined") {
    return {
      type,
      payload
    };
  } else {
    return {
      type,
      payload,
      meta
    };
  }
};

/***/ }),

/***/ "./src/views/FrontPage/FrontPage.js":
/*!******************************************!*\
  !*** ./src/views/FrontPage/FrontPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/villadsvalur/Developer/ValurDigital/ellen-lolck-site/themes/ellen-lolck-theme/react-src/src/views/FrontPage/FrontPage.js";




const FrontPage = ({}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Front Page");
}; // FrontPage.defaultProps = {};


FrontPage.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (FrontPage);

/***/ }),

/***/ "./src/views/Page/Page.js":
/*!********************************!*\
  !*** ./src/views/Page/Page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_Pages_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/Pages/Context */ "./src/context/Pages/Context.js");
var _jsxFileName = "/Users/villadsvalur/Developer/ValurDigital/ellen-lolck-site/themes/ellen-lolck-theme/react-src/src/views/Page/Page.js";
 // import PropTypes from "prop-types";
// import styled from "styled-components";





const Page = ({
  slug,
  match
}) => {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const {
    isLoading,
    pages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Pages_Context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const [currentPage, setCurrentPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (pages && pages.bySlug[match.params.slug]) {
      setCurrentPage({ ...pages.bySlug[match.params.slug]
      });
    } else {
      history.push("/not-found");
    }
  }, [pages, match.params.slug]);

  if (!isLoading && pages && currentPage) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }, "Page: ", currentPage.title, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, slug)));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Loading page...");
}; // Page.defaultProps = {};
// Page.propTypes = {};


/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/views/PageNotFound/PageNotFound.js":
/*!************************************************!*\
  !*** ./src/views/PageNotFound/PageNotFound.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/villadsvalur/Developer/ValurDigital/ellen-lolck-site/themes/ellen-lolck-theme/react-src/src/views/PageNotFound/PageNotFound.js";




const PageNotFound = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "SIDEN KUNNE IKKE FINDES"));
}; // PageNotFound.defaultProps = {};


PageNotFound.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/villadsvalur/Developer/ValurDigital/ellen-lolck-site/themes/ellen-lolck-theme/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map