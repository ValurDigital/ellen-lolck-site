import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import UnderlinedHeader from "../../molecules/UnderlinedHeader/UnderlinedHeader";

const FocusBox = ({ right, left }) => {
  if (right && left) {
    return (
      <StyledContainer fluid>
        <Container>
          <Row>
            <Col xs={{ span: 12, offset: 0 }} md={{ span: 5 }}>
              <UnderlinedHeader header={right.header} text={right.text} />
            </Col>

            <Col xs={{ span: 12, offset: 0 }} md={{ span: 5, offset: 1 }}>
              <UnderlinedHeader header={right.header} text={right.text} />
            </Col>
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
  background-color: ${({ theme: { colors } }) => colors.brand.lightGrey};
`;

// FocusBox.defaultProps = {};

FocusBox.propTypes = {};

export default FocusBox;
