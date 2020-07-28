import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const UnderlinedHeader = ({ header, subheader, color, text, centered }) => (
  <>
    <Wrapper subheader centered={centered} color={color}>
      <h2>{header}</h2>
      {subheader && <h3>- {subheader} </h3>}
    </Wrapper>
    {text && <Text dangerouslySetInnerHTML={{ __html: text }} />}
  </>
);

const Wrapper = styled.div`
  border-bottom: 4px solid;
  border-color: ${({ theme: { colors }, color }) => (color ? colors.brand[color] : colors.brand.primary)};
  margin-bottom: 28px;
  h2 {
    ${({ subheader }) => (subheader ? "margin-bottom:0;" : "")};
    ${({ centered }) => (centered ? "text-align:center;" : "")}
  }
`;

const Text = styled.div``;

UnderlinedHeader.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  text: PropTypes.string,
  centered: PropTypes.bool,
};

export default UnderlinedHeader;
