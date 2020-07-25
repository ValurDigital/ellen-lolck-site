import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const UnderlinedHeader = ({ header, subheader }) => (
  <Wrapper>
    <h2>{header}</h2>
    {subheader && <h3>- {subheader} </h3>}
  </Wrapper>
);

const Wrapper = styled.div`
  text-transform: capitalize;
  border-bottom: 4px solid;
  border-color: ${({ theme: { colors } }) => colors.brand.primary};
  margin-bottom: 28px;
  h2 {
    ${({ subheader }) => (subheader ? "margin-bottom: 0;" : "")}
  }
`;

UnderlinedHeader.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
};

export default UnderlinedHeader;
