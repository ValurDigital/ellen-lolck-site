import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import Banner from "../../molecules/Banner/Banner";
import SeoHelmet from "../../atoms/SeoHelmet";
import ContactForm from "../../molecules/ContactForm/ContactForm";
const Page = ({ content, title, acf, yoast }) => (
  <>
    <SeoHelmet seoData={yoast} pageTitle={title} />
    <Banner {...acf.banner} />
    <StyledContainer>
      <Row>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Row>
    </StyledContainer>
    <ContactForm />
  </>
);

const StyledContainer = styled(Container)`
  padding-top: ${({ theme: { padding } }) => padding.sectionTop};
  padding-bottom: ${({ theme: { padding } }) => padding.sectionBottom};
`;

export default Page;
