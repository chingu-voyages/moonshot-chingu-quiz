import styled from "styled-components";
import { breakpoint } from "../../frontend-config";

export const Wrapper = styled.div`
  height: 88px;
  width: 100%;
  background: #333;
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
  color: #18e28c;

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
  color: #fff;
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
  z-index: 500;
  background: #000;

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
  background: #fff;
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
  top: 0;
  right: 0;
  background: #fff;
  width: calc(100% - 80px);
  max-width: 350px;
  height: 100%;
  z-index: 600;
  transform: ${props => (props.active ? "translateX(0)" : "translateX(100%)")};
  transition: all ease 0.3s;
`;

export const MobileMenuTitle = styled.div`
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  background: #057a55;
  color: #fff;
  padding: 12px 0;
  border-bottom: 1px solid #ccc;
`;

export const MobileMenuLink = styled(NavbarLink)`
  display: block;
  color: #4a4a4a;
  text-align: center;
  font-size: 18px;
  margin: 0;
  padding: 12px 0;
  border-bottom: 1px solid #ccc;
`;
