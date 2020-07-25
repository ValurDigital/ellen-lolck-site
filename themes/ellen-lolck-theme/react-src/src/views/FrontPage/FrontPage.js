import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import Banner from "../../molecules/Banner/Banner";
import ImageWithText from "../../molecules/ImageWithText/ImageWithText";

const FrontPage = ({ acf }) => {
  return (
    <>
      <Banner {...acf.banner} />
      <ImageWithText {...acf.imageWithText} />
    </>
  );
};

export default FrontPage;
