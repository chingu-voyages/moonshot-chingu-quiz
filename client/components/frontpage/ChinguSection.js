import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { breakpoint } from "../../frontend-config";
import { Heading2, TextBody } from "../shared/styles";

const Wrapper = styled.div`
  background: ${props => props.theme.colors.grey};
  padding: 30px 30px 50px;
  width: 100%;

  @media (min-width: ${breakpoint("lg")}) {
    padding: 55px 30px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 730px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const ContentSection = styled.div`
  h2 {
    color: ${props => props.theme.colors.light};
    margin-bottom: 32px;
  }

  p {
    color: ${props => props.theme.colors.light};
  }

  @media (max-width: ${breakpoint("xl")}) {
    h2,
    p {
      text-align: center;
    }
  }

  @media (min-width: ${breakpoint("xl")}) {
    min-width: 540px;
  }
`;

const ImageSection = styled.div`
  position: relative;
  display: none;

  @media (min-width: ${breakpoint("xl")}) {
    min-width: 540px;
    display: block;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 60px;
  right: 80px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 56px;

  @media (max-width: ${breakpoint("xl")}) {
    justify-content: center;
  }
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid ${props => props.theme.colors.midGreen};
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

const ChinguSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageSection>
          <Logo src="/home-chingu-image.png" />
          <img src="./home-chingu.svg" alt="next" />
        </ImageSection>
        <ContentSection>
          <Heading2>What is Chingu?</Heading2>
          <TextBody>
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
          </TextBody>

          <ButtonsWrapper>
            <Link href="">
              <Button light>Primary action</Button>
            </Link>

            <Link href="">
              <Button dark>Secondary action</Button>
            </Link>
          </ButtonsWrapper>
        </ContentSection>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ChinguSection;
