import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import ImageBox from "../../atoms/ImageBox";

const ServiceBoxes = ({ firstBox, secondBox, thirdBox }) => {
  return (
    <StyledContainer fluid>
      <Container>
        <Row>
          <Col xs={{ span: 8, offset: 2 }} md={{ span: 4, offset: 0 }}>
            <ImageBox {...firstBox} color="primary" />
          </Col>
          <Col xs={{ span: 8, offset: 2 }} md={{ span: 4, offset: 0 }}>
            <ImageBox {...secondBox} color="green" />
          </Col>
          <Col xs={{ span: 8, offset: 2 }} md={{ span: 4, offset: 0 }}>
            <ImageBox {...thirdBox} color="red" />
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  padding-top: ${({ theme: { padding } }) => padding.sectionTop};
  padding-bottom: ${({ theme: { padding } }) => padding.sectionBottom};
`;
// ServiceBoxes.defaultProps = {};

ServiceBoxes.propTypes = {};

export default ServiceBoxes;
