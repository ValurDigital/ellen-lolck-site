import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row, Container, Col } from "react-bootstrap";
import UnderlinedHeader from "../UnderlinedHeader/UnderlinedHeader";

const Banner = ({ bannerHeader, bannerSubheader, bannerText, bannerImage }) => {
  if (bannerImage) {
    return (
      <StyledContainer>
        <Row>
          <Col sm="12" md="4">
            <TextWrapper>
              <UnderlinedHeader header={bannerHeader} subheader={bannerSubheader} />
              <Text dangerouslySetInnerHTML={{ __html: bannerText }} />
            </TextWrapper>
          </Col>
          <Col sm="12" md={{ span: 7, offset: 1 }}>
            <ImageWrapper>
              <Image src={bannerImage} />
            </ImageWrapper>
          </Col>
        </Row>
      </StyledContainer>
    );
  }
  return null;
};

const StyledContainer = styled(Container)`
  padding-top: ${({ theme: { padding } }) => padding.sectionTop};
`;
const Text = styled.div``;
const ImageWrapper = styled.div`
  height: 500px;
`;
const Image = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
export default Banner;
