import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import UnderlinedHeader from "../../atoms/UnderlinedHeader/UnderlinedHeader";

const PageNotFound = () => {
  return (
    <StyledContainer>
      <Row>
        <Col xs="6">
          <UnderlinedHeader header="Siden kunne desværre ikke findes" />
        </Col>
      </Row>
      <Row>
        <Col>Vi kunne desværre ikke finde den side du ledte efter.</Col>
      </Row>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  padding-top: 120px;
  padding-top: 120px;
  padding-bottom: 360px;
`;
// PageNotFound.defaultProps = {};

PageNotFound.propTypes = {};

export default PageNotFound;
