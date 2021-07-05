/*
  This component is used in `/pages/_app.js` as a wrapper so it will remain mounted even when the 'page' changes
*/
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Footer from "./Footer";
import { signIn, signOut, useSession } from "next-auth/client";
import { breakpointsRaw } from "../../frontend-config";

import MobileMenu from "./MobileMenu";

import {
  Wrapper,
  InnerWrapper,
  TopBarInnerWrapper,
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
  children: any;
  toggleTheme(): void;
  isDarkTheme: boolean;
}

const Layout = ({ children, toggleTheme, isDarkTheme }: LayoutProps) => {
  const [session, loading] = useSession();

  const [mobile, setMobile] = useState(false);
  const [headerShadow, setHeaderShadow] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  useEffect(() => {
    // mount
    checkPageSize();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", checkPageSize);

    // unmount
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkPageSize);
    };
  });

  const onScroll = () => {
    const distanceFromTop = window.scrollY;

    if (headerShadow && distanceFromTop === 0 && !mobile) {
      setHeaderShadow(false);
    } else if (!headerShadow && distanceFromTop > 0) {
      setHeaderShadow(true);
    }
  };

  const checkPageSize = () => {
    if (window.innerWidth >= breakpointsRaw("md") && mobile) {
      setMobile(false);
      setHeaderShadow(window.scrollY > 0);
      setMobileMenuActive(false);
    } else if (window.innerWidth < breakpointsRaw("md") && !mobile) {
      setMobile(true);
      setHeaderShadow(true);
      setMobileMenuActive(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <div>
      <Head>
        <title>Chingu Quiz App</title>
      </Head>

      <Wrapper withShadow={headerShadow}>
        <div style={{ height: "100%" }}>
          <TopBarInnerWrapper>
            <div>
              {session?.user?.email ? (
                <button
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => signIn('auth0')}
                >
                  Login
                </button>
              )}
            </div>
            {session?.user?.email && (
              <div>
                Signed in as: <i>{session.user.email}</i>
              </div>
            )}
          </TopBarInnerWrapper>
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
                toggleMobileMenu={toggleMobileMenu}
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
        </div>
      </Wrapper>

      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
