import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Container } from "react-bootstrap";
import NavigationContext from "../../context/Navigation/Context";
import PageContext from "../../context/Pages/Context";

const Footer = () => {
  const { isLoading } = useContext(PageContext);
  if (!isLoading) {
    return (
      <StyledContainer fluid>
        <Container>
          <Col xs={{ span: 6, offset: 3 }}>
            <ContactInfo>
              Ellen Lolck Madsen | Tlf.: 12345678 | lolck@hotmail.com <br />
              Adressevej 12, 8200 Aarhus N
              <br />
              Cvr.:12347585
            </ContactInfo>
          </Col>
        </Container>
      </StyledContainer>
    );
  }
  return null;
};

const StyledContainer = styled(Container)`
  background-color: ${({ theme: { colors } }) => colors.brand.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  color: white;
  text-align: center;
  bottom: 0;
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const ContactInfo = styled.div`
  text-align: center;
`;
// Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
