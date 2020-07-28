import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import Banner from "../../molecules/Banner/Banner";
import ImageWithText from "../../molecules/ImageWithText/ImageWithText";
import CenteredText from "../../organisms/CenteredText/CenteredText";
import ServiceBoxes from "../../organisms/ServiceBoxes/ServiceBoxes";
import ContactForm from "../../molecules/ContactForm/ContactForm";

const FrontPage = ({ acf }) => {
  return (
    <>
      <Banner {...acf.banner} />
      <ImageWithText {...acf.imageWithText} />
      <CenteredText {...acf.centeredText} />
      <ServiceBoxes {...acf.serviceBoxes} />
      <ContactForm />
    </>
  );
};

export default FrontPage;
