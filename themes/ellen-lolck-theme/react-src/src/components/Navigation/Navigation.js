import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavigationContext from "./context/Context";

const Navigation = () => {
  const { menuLinks } = useContext(NavigationContext);
  if (menuLinks) {
    return (
      <div>
        {menuLinks.map((link) => (
          <Link
            key={link.slug}
            className={link.classes}
            to={`/ellen-lolck/${link.slug}`}
          >
            {link.title}
          </Link>
        ))}
      </div>
    );
  }
  return null;
};

// Navigation.defaultProps = {};

Navigation.propTypes = {};

export default Navigation;
