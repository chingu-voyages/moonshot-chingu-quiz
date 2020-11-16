/*
  This component is used in `/pages/_app.js` as a wrapper so it will remain mounted even when the 'page' changes
*/
import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Footer from "./Footer";
import { breakpointsRaw } from "~/frontend-config";

import MobileMenu from "./MobileMenu";

import {
  Wrapper,
  InnerWrapper,
  LogoWrapper,
  Logo,
  LogoText,
  Navbar,
  NavbarLink,
  NavbarToggleSwitch,
  ToggleSwitchSlider,
} from "./styles";

const Main = styled.main`
  padding-top: 88px; // fixed header height
  min-height: calc(100vh - 66px); // Push footer to bottom when needed
`;

interface LayoutProps {
  toggleTheme(): void;
  isDarkTheme: boolean;
}
interface LayoutState {
  mobile: boolean;
  headerShadow: boolean;
  mobileMenuActive: boolean;
}

export default class Layout extends React.Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);

    this.state = {
      mobile: false,
      headerShadow: false,
      mobileMenuActive: false,
    };

    this.onScroll = this.onScroll.bind(this);
    this.checkPageSize = this.checkPageSize.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  componentDidMount() {
    this.checkPageSize();
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.checkPageSize);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.checkPageSize);
  }

  onScroll() {
    const { mobile, headerShadow } = this.state;

    const distanceFromTop = window.scrollY;

    if (headerShadow && distanceFromTop === 0 && !mobile) {
      this.setState({
        headerShadow: false,
      });
    } else if (!headerShadow && distanceFromTop > 0) {
      this.setState({
        headerShadow: true,
      });
    }
  }

  checkPageSize() {
    const { mobile } = this.state;

    if (window.innerWidth >= breakpointsRaw("md") && mobile) {
      this.setState({
        mobile: false,
        headerShadow: window.scrollY > 0,
        mobileMenuActive: false,
      });
    } else if (window.innerWidth < breakpointsRaw("md") && !mobile) {
      this.setState({
        mobile: true,
        headerShadow: true,
        mobileMenuActive: false,
      });
    }
  }

  toggleMobileMenu() {
    this.setState(prevState => ({
      mobileMenuActive: !prevState.mobileMenuActive,
    }));
  }

  render() {
    const { children, toggleTheme, isDarkTheme } = this.props;
    const { mobile, headerShadow, mobileMenuActive } = this.state;

    return (
      <div>
        <Head>
          <title>Chingu Quiz App</title>
        </Head>

        <Wrapper withShadow={headerShadow}>
          <InnerWrapper>
            <Link href="/">
              <LogoWrapper>
                <Logo src="/logo.png" />
                <LogoText>Chingu Quiz</LogoText>
              </LogoWrapper>
            </Link>

            {mobile ? (
              <MobileMenu
                active={mobileMenuActive}
                toggleMobileMenu={this.toggleMobileMenu}
                toggleTheme={toggleTheme}
                isDarkTheme={isDarkTheme}
              />
            ) : (
              <Navbar>
                <Link href="/quizzes">
                  <NavbarLink>Quiz</NavbarLink>
                </Link>

                <Link href="/contribute">
                  <NavbarLink>Contribute</NavbarLink>
                </Link>

                <Link href="/about">
                  <NavbarLink>About Us</NavbarLink>
                </Link>

                <NavbarToggleSwitch onClick={toggleTheme}>
                  <ToggleSwitchSlider isDarkTheme={isDarkTheme} />
                </NavbarToggleSwitch>
              </Navbar>
            )}
          </InnerWrapper>
        </Wrapper>

        <Main>{children}</Main>
        <Footer />
      </div>
    );
  }
}
