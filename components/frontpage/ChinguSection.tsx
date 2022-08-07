import React from "react";
import Link from "next/link";
import styled, { css }        from "styled-components";
import { breakpoint }         from "../../frontend-config";
import { Heading2, TextBody } from "../shared/styles";


const Wrapper = styled.div`
  background: ${props => props.theme.colors.backgroundPrimary};
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
    color: ${props => props.theme.colors.textPrimary};
    margin-bottom: 32px;
  }

  p {
    color: ${props => props.theme.colors.textPrimary};
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

export const ChinguImage = styled.img`
  position: relative;
  right: 80px;

  @media (min-width: ${breakpoint("xl")}) {
    padding-left: 70px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 56px;

  @media (max-width: ${breakpoint("xl")}) {
    justify-content: center;
  }
`;

const Button = styled.button<{
  light?: boolean
  dark?: boolean
}>`
  background: transparent;
  border: 1px solid ${props => props.theme.colors.greenPrimary};
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  margin-right: 24px;
  padding: 10px 20px;

  ${props =>
    props.light &&
    css`
      background: ${props.theme.colors.greenPrimary};
      color: ${props.theme.colors.backgroundPrimary};

      &:hover {
        background: ${props.theme.colors.backgroundPrimary};
        color: ${props.theme.colors.greenPrimary};
      }
    `}

  ${props =>
    props.dark &&
    css`
      background: ${props.theme.colors.backgroundPrimary};
      color: ${props.theme.colors.greenPrimary};

      &:hover {
        background: ${props.theme.colors.greenPrimary};
        color: ${props.theme.colors.backgroundPrimary};
      }
    `}
`;

const ChinguSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageSection>
          <ChinguImage src="/home-chingu-image.png" />
        </ImageSection>
        <ContentSection>
          <Heading2>What is Chingu?</Heading2>
          <TextBody>
            We place motivated people with similar goals together in project teams which allows them level-up in ways they couldn&39;t otherwise do. When you join Chingu, you will collaborate with others to build & launch real projects. We match learners from all skill levels, all timezones, and a variety of different tech stacks.
          </TextBody>

          <ButtonsWrapper>
          <a
             target="_blank"
             rel="noreferrer"
             href="https://chingu.io/">
              <Button light>Take Me To Chingu.io</Button>
            </a>
          </ButtonsWrapper>
        </ContentSection>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ChinguSection;
