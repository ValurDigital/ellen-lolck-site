import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import SeoHelmet from "../../atoms/SeoHelmet";
import ContactForm from "../../molecules/ContactForm/ContactForm";
import Banner from "../../molecules/Banner/Banner";
import MoreInfoBox from "../../organisms/MoreInfoBox";
import FocusBox from "../../organisms/FocusBox";

const Page = ({ content, title, acf, yoast }) => (
  <>
    <SeoHelmet seoData={yoast} pageTitle={title} />
    <Banner {...acf.banner} />
    <FocusBox {...acf.focusBox} />
    <StyledContainer>
      <Row>
        <Content dangerouslySetInnerHTML={{ __html: content }} xs="12" />
      </Row>
    </StyledContainer>
    <MoreInfoBox {...acf.readMore} />
    <ContactForm />
  </>
);

const StyledContainer = styled(Container)`
  padding-top: ${({ theme: { padding } }) => padding.sectionTop};
  padding-bottom: ${({ theme: { padding } }) => padding.sectionBottom};
`;

const Content = styled(Col)`
  padding-top: ${({ theme: { padding } }) => padding.sectionTop};
  padding-bottom: ${({ theme: { padding } }) => padding.sectionBottom};
`;

export default Page;
