import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImageBox = ({ image, header, text, link, color }) => {
  return (
    <a href={link}>
      <Wrapper color={color}>
        <ImageWrapper color={color}>
          <Image src={image.sizes.large} alt={image.alt} />
          <ImageOverlay color={color} />
        </ImageWrapper>
        <TextWrapper>
          <Header>{header}</Header>
          <Text>{text}</Text>
        </TextWrapper>
        <Button href={link} color={color}>
          Læs mere
        </Button>
      </Wrapper>
    </a>
  );
};

const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 45px;
  padding: 0 25px;
  transition: all 0.3s ease;
`;
const Wrapper = styled.div`
  position: relative;
  height: 350px;
  width: 100%;
  &:hover ${TextWrapper} {
    bottom: 100px;
  }
`;
const Header = styled.h3`
  color: white !important;
`;
const Text = styled.span`
  color: white;
  transform: translate(-50%, -50%);
`;
const ImageWrapper = styled.div`
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
`;
const Image = styled.img`
  height: 100%;
  width: auto;
`;
const ImageOverlay = styled.div`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ theme: { colors }, color }) => (color ? colors.brand[color] : colors.brand.primary)};
  opacity: 0.6;
`;
const Button = styled.a`
  background-color: ${({ theme: { colors }, color }) => (color ? colors.brand[color] : colors.brand.primary)};
  padding: 20px;
  color: white !important;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  text-decoration: none;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
  &:hover {
    text-decoration: none;
  }
`;

// ImageBox.defaultProps = {};

ImageBox.propTypes = {};

export default ImageBox;
