import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import spinner from "../../assets/images/spinner.gif";

const Loading = ({}) => {
  return (
    <Wrapper>
      <img src={spinner} alt="Loading" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  right: 50%;
  position: absolute;
  height: 100px;
  width: 100px;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  img {
    width: 100px;
    height: 100px;
  }
`;
export default Loading;
