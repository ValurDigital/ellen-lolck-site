import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavigationContext from "../../context/Navigation/Context";
import { Nav, Container, Row } from "react-bootstrap";
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
              {menuLinks.map((link) => {
                const { ID, slug, title, menu_item_parent } = link;
                if (menu_item_parent === "0") {
                  return (
                    <MenuItem key={ID}>
                      <NavLink
                        to={`/ellen-lolck/${slug === "forside" ? "" : slug}`}
                        activeStyle={{ borderBottom: "1px solid", borderColor: colors.brand.primary }}
                      >
                        {title}
                      </NavLink>
                    </MenuItem>
                  );
                }
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

const MenuItem = styled(Nav.Item)`
  margin-bottom: 15px;
  a {
    color: ${({ theme: { colors } }) => colors.textMain};
    text-decoration: none;
    padding: 8px;
  }
  a:hover {
    text-decoration: none;
  }
`;
export default Navigation;
