import React from "react";
import styled from "styled-components";
import { breakpoint } from "../../frontend-config";

const Wrapper = styled.div`
  background: ${props => props.theme.colors.grey};
  padding: 30px 0 10px 0;

  @media (min-width: ${breakpoint("lg")}) {
    padding: 40px 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 730px;
  margin: 0 auto;
`;

const Headline = styled.h1`
  font-size: 25px;
  line-height: 30px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: center;
  color: ${props => props.theme.colors.midGreen};
  margin-bottom: 32px;

  @media (min-width: ${breakpoint("md")}) {
    font-size: 40px;
    line-height: 44px;
  }

  @media (min-width: ${breakpoint("lg")}) {
    font-size: 53px;
    line-height: 63px;
  }
`;

const HeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Headline>How To Contribute</Headline>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;
