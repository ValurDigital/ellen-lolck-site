import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import UnderlinedHeader from "../../atoms/UnderlinedHeader/UnderlinedHeader";

const ContactForm = () => {
  return (
    <StyledContainer fluid>
      <Container>
        <Row>
          <Col xs="3">
            <UnderlinedHeader header="Kontakt mig" />
          </Col>
        </Row>
        <Row>
          <Col xs="4">Har du spørgsmål, så send mig gerne en besked. Så vender jeg tilbage snarest muligt.</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </StyledContainer>
  );
};

// ContactForm.defaultProps = {};

ContactForm.propTypes = {};

const StyledContainer = styled(Container)`
  padding-top: ${({ theme: { padding } }) => padding.sectionTop};
  padding-bottom: ${({ theme: { padding } }) => padding.sectionBottom};
  background-color: ${({ theme: { colors } }) => colors.brand.lightGrey};
`;
export default ContactForm;
