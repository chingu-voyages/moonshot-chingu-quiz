import React from "react";
import Link from "next/link";

import { FooterWrapper, ContentWrapper, HighlightLink } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        Powered By
        <HighlightLink>
          <Link href="https://chingu.io/">Chingu</Link>
        </HighlightLink>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;
