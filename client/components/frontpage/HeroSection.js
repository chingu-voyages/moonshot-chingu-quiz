import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { breakpoint } from "../../frontend-config";

const Wrapper = styled.div`
  background: ${props => props.theme.colors.grey};
  padding: 45px 25px 65px;

  @media (min-width: ${breakpoint("lg")}) {
    padding: 115px 25px 190px;
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

const Subtitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${props => props.theme.colors.light};
  padding: 0 40px;

  @media (min-width: ${breakpoint("lg")}) {
    font-size: 18px;
    line-height: 28px;
    padding: 0;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid #18e28c;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  margin-right: 24px;
  padding: 10px 20px;

  &:last-of-type {
    margin-right: 0;
  }

  ${props =>
    props.light &&
    css`
      background: ${props.theme.colors.midGreen};
      color: ${props.theme.colors.grey};
    `}

  ${props =>
    props.dark &&
    css`
      background: ${props.theme.colors.grey};
      color: ${props.theme.colors.midGreen};
    `}
`;

const HeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Headline>{`<Chingu meets Hacktober/>`}</Headline>

        <Subtitle>
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te.
        </Subtitle>

        <ButtonsWrapper>
          <Link href="/contribute">
            <Button light>Contribute</Button>
          </Link>

          <Link href="/about">
            <Button dark>About Us</Button>
          </Link>
        </ButtonsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;
