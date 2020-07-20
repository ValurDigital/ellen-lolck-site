import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const SeoHelmet = ({ seoData, pageTitle }) => {
  const { yoast_wpseo_metadesc } = seoData;
  const PAGE_TITLE = `Ellen Lolck | ${pageTitle}`;
  return (
    <Helmet>
      <title>{PAGE_TITLE}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={yoast_wpseo_metadesc} />
      <meta property="og:site_name" content={PAGE_TITLE} />
      <meta property="og:image" content={seoData.ogImage || ""} />
      <meta property="og:locale" content="da-dk" />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={yoast_wpseo_metadesc} />
      <meta property="twitter:image" content={seoData.twitterImage || ""} />
      <meta property="twitter:title" content={PAGE_TITLE} />
      <meta property="twitter:description" content={yoast_wpseo_metadesc} />
    </Helmet>
  );
};

// SeoHelmet.defaultProps = {};

SeoHelmet.propTypes = {};

export default SeoHelmet;
