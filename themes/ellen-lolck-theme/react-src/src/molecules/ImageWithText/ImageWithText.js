import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import UnderlinedHeader from "../../atoms/UnderlinedHeader/UnderlinedHeader";

const ImageWithText = ({ imageSrc, header, subheader, text }) => {
  return (
    <StyledContainer fluid>
      <Container>
        <StyledRow>
          <Col xs="12" md="6">
            <StyledImage src={imageSrc.link} alt={imageSrc.alt} />
          </Col>
          <Col sm="12" md="4">
            <TextWrapper>
              <UnderlinedHeader header={header} subheader={subheader} color="green" />
              <InnerTextWrapper dangerouslySetInnerHTML={{ __html: text }} />
            </TextWrapper>
          </Col>
        </StyledRow>
      </Container>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  background-color: ${({ theme: { colors } }) => colors.brand.lightGrey};
  padding-top: ${({ theme: { padding } }) => padding.sectionTop};
  padding-bottom: ${({ theme: { padding } }) => padding.sectionBottom};
`;

const StyledRow = styled(Row)``;

const TextWrapper = styled.div``;

const InnerTextWrapper = styled.div``;
const StyledImage = styled.img`
  height: 400px;
  width: auto;
`;

export default ImageWithText;
