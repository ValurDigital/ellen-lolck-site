import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const SeoHelmet = ({ seoData }) => {
  return (
    <Helmet>
      <title>{seoData.metaTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={seoData.metaDescription} />
      <meta property="og:site_name" content={seoData.metaTitle} />
      <meta property="og:image" content={seoData.ogImage} />
      <meta property="og:locale" content={seoData.locale} />
      <meta property="og:title" content={seoData.ogTitle} />
      <meta property="og:description" content={seoData.ogDescription} />
      <meta property="twitter:image" content={seoData.twitterImage} />
      <meta property="twitter:title" content={seoData.twitterTitle} />
      <meta
        property="twitter:description"
        content={seoData.twitterDescription}
      />
    </Helmet>
  );
};

// SeoHelmet.defaultProps = {};

SeoHelmet.propTypes = {};

export default SeoHelmet;
