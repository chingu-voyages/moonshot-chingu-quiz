import React from 'react';

import Link from "next/link";

import { MobileMenuPageOverlay, MobileMenuButtonWrapper, MobileMenuButton, MobileMenuWrapper, MobileMenuTitle, MobileMenuLink } from './styles';

const MobileMenu = ({ active, toggleMobileMenu }) => {
    return (
        <>
            <MobileMenuPageOverlay active={active} onClick={toggleMobileMenu} />
            <MobileMenuButtonWrapper onClick={toggleMobileMenu}>
                <MobileMenuButton />
            </MobileMenuButtonWrapper>

            <MobileMenuWrapper active={active}>
                <MobileMenuTitle>
                    Menu
                </MobileMenuTitle>
                <Link href="/">
                    <MobileMenuLink onClick={toggleMobileMenu}>
                        Home
                    </MobileMenuLink>
                </Link>

                <Link href="/quizzes">
                    <MobileMenuLink onClick={toggleMobileMenu}>
                        Quiz
                    </MobileMenuLink>
                </Link>

                <Link href="/contribute">
                    <MobileMenuLink onClick={toggleMobileMenu}>
                        Contribute
                    </MobileMenuLink>
                </Link>

                <Link href="/about">
                    <MobileMenuLink onClick={toggleMobileMenu}>
                        About Us
                    </MobileMenuLink>
                </Link>
            </MobileMenuWrapper>
        </>
    )
}

export default MobileMenu