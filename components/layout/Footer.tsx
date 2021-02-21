import React from "react";
import Link from "next/link";

import { FooterWrapper, ContentWrapper, HighlightLink } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <div>
          Powered By
          <HighlightLink>
            <Link href="https://chingu.io/">Chingu</Link>
          </HighlightLink>
        </div>

        <div>
          <HighlightLink>
            <Link href="/data-privacy">
              Data Privacy
            </Link>
          </HighlightLink>
        </div>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;
