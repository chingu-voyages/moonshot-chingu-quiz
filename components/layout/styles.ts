import styled         from "styled-components";
import { breakpoint } from "../../frontend-config";

export const Wrapper = styled.div<{
  withShadow?: boolean;
}>`
  height: 88px;
  width: 100%;
  background: ${props => props.theme.colors.backgroundMenu};
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
  margin: 0 auto;
`;

export const TopBarInnerWrapper = styled(InnerWrapper)`
  color: white;
  justify-content: flex-start;
  padding: 4px;
  flex-direction: row-reverse;

  & > div {
    font-size: 0.8rem;
    margin-left: 8px;
  }
`

// LOGO //
export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
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
  color: ${props => props.theme.colors.greenPrimary};

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
  color: ${props => props.theme.colors.textMenu};
  margin-right: 32px;
  text-decoration: none;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const NavbarToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 46px;
  height: 26px;
  margin-left: 32px;
  margin-right: 4px;
`;

export const ToggleSwitchSlider = styled.span<{
  isDarkTheme?: boolean;
}>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.backgroundPrimary};
  border-radius: 26px;
  ${props => props.isDarkTheme && "filter: contrast(1.3)"};

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background: ${props => props.theme.colors.greenPrimary};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    ${props =>
      props.isDarkTheme
        ? ``
        : `-webkit-transform: translateX(20px);
          -ms-transform: translateX(20px);
          transform: translateX(20px)`};
  }
`;

// MOBILE MENU //
export const MobileMenuPageOverlay = styled.div<{
  active?: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 500;
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
  background: ${props => props.theme.colors.textMenu};
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

export const MobileMenuWrapper = styled.div<{
  active?: boolean;
}>`
  position: fixed;
  top: 88px;
  right: 0;
  padding: 18px 0;
  background: ${props => props.theme.colors.backgroundMenu};
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

export const MobileToggleSwitch = styled(NavbarToggleSwitch)`
  display: block;
  margin: 18px 0 18px 44px;
`;

// Footer //
export const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  height: 66px;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

export const ContentWrapper = styled.div`
  width: ${breakpoint("maxWidth")};
  max-width: calc(100% - 70px);
  margin: 0 auto;
  color: ${props => props.theme.colors.textPrimary};
  justify-content: space-between;
  display: flex;
`;

export const HighlightLink = styled.span`
  color: ${props => props.theme.colors.greenPrimary};
  margin-left: 5px;
`;
