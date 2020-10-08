import styled from "styled-components";
import { breakpoint } from "../../frontend-config";

export const Wrapper = styled.div`
  height: 88px;
  width: 100%;
  background: ${props => props.theme.colors.grey};
  position: fixed;
  top: 0;
  left: 0;
  transition: box-shadow ease 0.3s;
  box-shadow: ${props =>
    props.withShadow
      ? "0px 6px 6px 3px rgba(0, 0, 0, 0.25)"
      : "0px 6px 6px 3px rgba(0, 0, 0, 0)"};
  z-index: 10;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1440px;
  max-width: calc(100% - 70px);
  height: 100%;
  margin: 0 auto;
`;

// LOGO //
export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 47px;
  height: 47px;
  margin-right: 20px;

  @media (min-width: ${breakpoint("md")}) {
    width: 58px;
    height: 58px;
    margin-right: 18px;
  }
`;

export const LogoText = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  line-height: 32px;
  font-weight: bold;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.midGreen};

  @media (min-width: ${breakpoint("md")}) {
    font-size: 24px;
  }
`;

// NAVBAR //
export const Navbar = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavbarLink = styled.a`
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.light};
  margin-right: 32px;

  &:last-of-type {
    margin-right: 0;
  }
`;

// MOBILE MENU //
export const MobileMenuPageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 700;
  background: ${props => props.theme.colors.dark};

  opacity: ${props => (props.active ? "0.2" : "0")};
  ${props => !props.active && `pointer-events: none`};
  transition: all ease 0.3s;
`;

export const MobileMenuButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 27px;
`;

export const MobileMenuButton = styled.div`
  width: 100%;
  height: 5px;
  background: ${props => props.theme.colors.light};
  border-radius: 2px;

  &:before,
  &:after {
    content: "";
    width: inherit;
    height: inherit;
    border-radius: 2px;
    background: inherit;
    position: absolute;
    left: 0;
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }
`;

export const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 88px;
  right: 0;
  padding: 18px 0;
  background: ${props => props.theme.colors.grey};
  width: calc(100% - 80px);
  max-width: 350px;
  height: 100%;
  z-index: 600;
  transform: ${props => (props.active ? "translateX(0)" : "translateX(100%)")};
  transition: all ease 0.3s;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.25);
`;

export const MobileMenuLink = styled(NavbarLink)`
  display: block;
  text-align: left;
  font-size: 18px;
  margin: 0;
  padding: 18px 0 18px 44px;
`;
