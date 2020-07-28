import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavigationContext from "../../context/Navigation/Context";
import { Nav, Container, Row } from "react-bootstrap";
import { ChevronDown } from "@styled-icons/fa-solid";
import logoPNG from "../../assets/images/LOGOEllen.png";
import colors from "../../utils/theme/colors";

const Navigation = () => {
  const { menuLinks } = useContext(NavigationContext);
  if (menuLinks) {
    return (
      <StyledContainer fluid>
        <Container>
          <MenuWrapper>
            <LogoImage src={logoPNG} />
            <Menu className="justify-content-end" fill>
              {menuLinks[0].map((link) => {
                const { ID, slug, title, menu_item_parent } = link;
                if (menuLinks[ID]) {
                  const children = menuLinks[ID].map(({ ID, slug, title, menu_item_parent, url }) => {
                    const path = new URL(url).pathname;
                    return (
                      <li>
                        <NavLink to={path} activeStyle={{ borderBottom: "1px solid", borderColor: colors.white }}>
                          {title}
                        </NavLink>
                      </li>
                    );
                  });
                  return (
                    <MenuItem key={ID}>
                      <NavLink
                        exact
                        to={`/ellen-lolck/${slug === "forside" ? "" : slug}`}
                        activeStyle={{ borderBottom: "1px solid", borderColor: colors.brand.primary }}
                      >
                        {title}
                        <Chevron />
                      </NavLink>
                      <MenuDropdown>{children}</MenuDropdown>
                    </MenuItem>
                  );
                }

                return (
                  <MenuItem key={ID}>
                    <NavLink
                      exact
                      to={`/ellen-lolck/${slug === "forside" ? "" : slug}`}
                      activeStyle={{ borderBottom: "1px solid", borderColor: colors.brand.primary }}
                    >
                      {title}
                    </NavLink>
                  </MenuItem>
                );
              })}
            </Menu>
          </MenuWrapper>
        </Container>
      </StyledContainer>
    );
  }

  return null;
};

const StyledContainer = styled(Container)`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
`;
const MenuWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
const LogoImage = styled.img``;
const Menu = styled(Nav)`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  width: 100%;
`;

const MenuDropdown = styled.ul`
  display: none;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  justify-content: space-evenly;
  background: ${({ theme: { colors } }) => colors.brand.primary};
  padding: 25px 0px;
  color: white;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
  li {
    text-decoration: none;
    list-style: none;
    a {
      color: ${({ theme: { colors } }) => colors.white};
    }
  }
  &:hover {
    display: flex;
  }
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
`;
const MenuItem = styled(Nav.Item)`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
  padding-bottom: 15px;
  a {
    color: ${({ theme: { colors } }) => colors.textMain};
    text-decoration: none;
    padding: 8px;
  }
  a:hover {
    text-decoration: none;
  }
  &:hover ${MenuDropdown} {
    display: flex;
  }
`;
const Chevron = styled(ChevronDown)`
  height: 16px;
  margin-left: 10px;
`;
export default Navigation;
