import React, { useEffect, useState, useContext } from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PageContext from "../../context/Pages/Context";
import Banner from "../../molecules/Banner/Banner";
import SeoHelmet from "../../atoms/SeoHelmet";
import Loading from "../../atoms/Loading/Loading";

const Page = ({ acf }) => {
  return (
    <Container>
      <Banner {...acf.banner} />
    </Container>
  );
};

// Page.defaultProps = {};

// Page.propTypes = {};

export default Page;
