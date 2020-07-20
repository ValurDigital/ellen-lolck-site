import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row } from "react-bootstrap";

const Banner = ({ banner_image, banner_text, overskrift }) => {
  if (banner_image) {
    return (
      <Row>
        <h2>{overskrift}</h2>
        <img src={banner_image} />
        <p>{banner_text}</p>
      </Row>
    );
  }
  return null;
};

// Banner.defaultProps = {};

Banner.propTypes = {};

export default Banner;
