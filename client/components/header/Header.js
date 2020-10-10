/*
  This component is used in `/pages/_app.js` as a wrapper so it will remain mounted even when the 'page' changes
*/
import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { breakpointsRaw } from "../../frontend-config";

import MobileMenu from "./MobileMenu";

import {
  Wrapper,
  InnerWrapper,
  LogoWrapper,
  Logo,
  LogoText,
  Navbar,
  NavbarLink,
} from "./styles";

const Main = styled.main`
  padding-top: 88px; // fixed header height
  min-height: calc(
    100vh - 66px
  ); // Main fills height - footer to push fotter to bottom
`;

export default class Header extends React.Component {
  constructor(props) {
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
    const { children } = this.props;
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
              </Navbar>
            )}
          </InnerWrapper>
        </Wrapper>

        <Main>{children}</Main>
      </div>
    );
  }
}
