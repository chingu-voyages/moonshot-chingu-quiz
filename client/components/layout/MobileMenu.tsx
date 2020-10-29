import React from "react";

import Link from "next/link";

import {
  MobileMenuPageOverlay,
  MobileMenuButtonWrapper,
  MobileMenuButton,
  MobileMenuWrapper,
  MobileMenuLink,
  MobileToggleSwitch,
  ToggleSwitchSlider,
} from "./styles";

interface MobileMenuProps {
  active: boolean;
  toggleMobileMenu(): void;
  toggleTheme(): void;
  isDarkTheme: boolean;
}
const MobileMenu = ({
  active,
  toggleMobileMenu,
  toggleTheme,
  isDarkTheme,
}: MobileMenuProps) => {
  return (
    <>
      <MobileMenuPageOverlay active={active} onClick={toggleMobileMenu} />
      <MobileMenuButtonWrapper onClick={toggleMobileMenu}>
        <MobileMenuButton />
      </MobileMenuButtonWrapper>

      <MobileMenuWrapper active={active}>
        <Link href="/">
          <MobileMenuLink onClick={toggleMobileMenu}>Home</MobileMenuLink>
        </Link>

        <Link href="/quizzes">
          <MobileMenuLink onClick={toggleMobileMenu}>Quiz</MobileMenuLink>
        </Link>

        <Link href="/contribute">
          <MobileMenuLink onClick={toggleMobileMenu}>Contribute</MobileMenuLink>
        </Link>

        <Link href="/about">
          <MobileMenuLink onClick={toggleMobileMenu}>About Us</MobileMenuLink>
        </Link>

        <MobileToggleSwitch onClick={toggleTheme}>
          <ToggleSwitchSlider isDarkTheme={isDarkTheme} />
        </MobileToggleSwitch>
      </MobileMenuWrapper>
    </>
  );
};

export default MobileMenu;
