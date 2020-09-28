/*
  This component is used in `/pages/_app.js` as a wrapper so it will remain mounted even when the 'page' changes
*/
import React from 'react';
import Head from "next/head";
import Link from "next/link";
import { breakpointsRaw } from '../../frontend-config';

import { Wrapper, InnerWrapper, LogoWrapper, Logo, LogoText, Navbar, NavbarLink } from './styles';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: false,
    }

    this.checkPageSize = this.checkPageSize.bind(this);
  }

  componentDidMount() {
    this.checkPageSize();
    window.addEventListener('resize', this.checkPageSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkPageSize);
  }

  checkPageSize() {
    const { mobile } = this.state;

    if (window.innerWidth >= breakpointsRaw('md') && mobile) {
      this.setState({
        mobile: false
      })
    } else if (window.innerWidth < breakpointsRaw('md') && !mobile) {
      this.setState({
        mobile: true
      })
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Head>
          <title>Chingu Quiz App</title>
        </Head>

        <Wrapper>
          <InnerWrapper>
            <Link href="/">
              <LogoWrapper>
                <Logo />
                <LogoText>Chingu Quiz</LogoText>
              </LogoWrapper>
            </Link>

            <Navbar>
              <Link href="/quizzes">
                <NavbarLink>
                  Quiz
                </NavbarLink>
              </Link>

              <Link href="/contribute">
                <NavbarLink>
                  Contribute
                </NavbarLink>
              </Link>

              <Link href="/about">
                <NavbarLink>
                  About Us
                </NavbarLink>
              </Link>
            </Navbar>
          </InnerWrapper>
        </Wrapper>

        <main>{children}</main>
      </div>
    );
  }
}
