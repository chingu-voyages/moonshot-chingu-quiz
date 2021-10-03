import React from "react";
import Link from "next/link";

import { FooterWrapper, ContentWrapper, HighlightLink } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <footer>
          Powered By
          <HighlightLink>
            <a
              target="_blank"
              href="https://chingu.io/">
              Chingu
            </a>
          </HighlightLink>
          <HighlightLink>
            <Link href="/data-privacy">
              Data Privacy
            </Link>
          </HighlightLink>
        </footer>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;
