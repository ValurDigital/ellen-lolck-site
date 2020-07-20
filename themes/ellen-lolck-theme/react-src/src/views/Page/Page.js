import React, { useEffect, useState, useContext } from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PageContext from "../../context/Pages/Context";

const Page = ({ slug, match }) => {
  const history = useHistory();
  const { isLoading, pages } = useContext(PageContext);
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    if (pages && pages.bySlug[match.params.slug]) {
      setCurrentPage({ ...pages.bySlug[match.params.slug] });
    } else {
      history.push("/not-found");
    }
  }, [pages, match.params.slug, history]);

  if (!isLoading && pages && currentPage) {
    return (
      <Container>
        <Row>
          <h1 className="header">Page: {currentPage.title} </h1>
          <div>{slug}</div>
        </Row>
      </Container>
    );
  }
  return <span>Loading page...</span>;
};

// Page.defaultProps = {};

// Page.propTypes = {};

export default Page;
