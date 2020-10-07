import React from "react";
import Link from "next/link";

import { Wrapper, ContentWrapper, HighlightLink } from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        Powered By
        <HighlightLink>
          <Link href="https://chingu.io/">Chingu</Link>
        </HighlightLink>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Footer;
