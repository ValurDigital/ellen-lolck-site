import React, { useEffect, useState, useContext } from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PageContext from "../../context/Pages/Context";
import Banner from "../../components/Banner/Banner";
import SeoHelmet from "../../components/SeoHelmet";

const Page = ({ match }) => {
  const history = useHistory();
  const { isLoading, pages } = useContext(PageContext);
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    if (pages && pages.bySlug[match.params.slug]) {
      setCurrentPage({ ...pages.bySlug[match.params.slug] });
    } else {
      history.push("/ellen-lolck/forside");
    }
  }, [pages, match.params.slug, history]);

  if (!isLoading && pages && currentPage) {
    return (
      <Container>
        <SeoHelmet seoData={currentPage.yoast} pageTitle={currentPage.title} />
        <Banner {...currentPage.acf.banner} />
        <Row>
          <h1 className="header">Page: {currentPage.title} </h1>
        </Row>
        <Row>
          <div dangerouslySetInnerHTML={{ __html: currentPage.content }}></div>
        </Row>
      </Container>
    );
  }
  return <span>Loading page...</span>;
};

// Page.defaultProps = {};

// Page.propTypes = {};

export default Page;
