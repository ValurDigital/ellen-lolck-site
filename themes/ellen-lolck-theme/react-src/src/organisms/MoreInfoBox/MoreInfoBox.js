import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import UnderlinedHeader from "../../molecules/UnderlinedHeader/UnderlinedHeader";

const MoreInfoBox = ({ header, info }) => {
  if (header) {
    return (
      <StyledContainer fluid>
        <Container>
          <Row>
            <Col xs="12" md="4">
              <UnderlinedHeader header={header} />
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="8" dangerouslySetInnerHTML={{ __html: info }} />
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
  background-color: rgb(226 154 16 / 0.25);
  color: rgba(0, 0, 0, 1);
`;

MoreInfoBox.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
};

export default MoreInfoBox;
