import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import UnderlinedHeader from "../../molecules/UnderlinedHeader/UnderlinedHeader";

const CenteredText = ({ header, text }) => {
  if (header !== "") {
    return (
      <StyledContainer fluid>
        <Container>
          <Row className="d-flex justify-content-center text-align-center">
            <Col xs="8">
              <UnderlinedHeader color="red" header={header} centered />
            </Col>
          </Row>

          <Row className="d-flex justify-content-center text-align-center">
            <Col xs="10" dangerouslySetInnerHTML={{ __html: text }} />
          </Row>
        </Container>
      </StyledContainer>
    );
  }
  return null;
};

const StyledContainer = styled(Container)`
  padding-top: ${({ theme: { padding } }) => padding.sectionTop};
  padding-bottom: ${({ theme: { padding } }) => padding.sectionBottom};
`;
// CenteredText.defaultProps = {};

CenteredText.propTypes = {};

export default CenteredText;
