import React from "react";
import styled                                         from "styled-components";
import { breakpoint }                                 from "../../frontend-config";
import { PuzzleIcon, GrowSkillsIcon, OpenSourceIcon } from "../shared/icons";

const Wrapper = styled.div`
  background: ${props => props.theme.colors.light};
  padding: 30px 20px 50px;

  @media (min-width: ${breakpoint("xl")}) {
    padding: 55px 20px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${breakpoint("xl")}) {
    flex-direction: row;
  }
`;

const InfoBox = styled.div`
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: ${breakpoint("xl")}) {
    margin-right: 30px;
    max-width: 350px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 25px;
  fill: ${props => props.theme.colors.grey};
`;

const IconWrapperStroke = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 25px;
  fill: none;
  stroke: ${props => props.theme.colors.grey};
`;

const Headline = styled.h3`
  font-size: 25px;
  line-height: 29px;
  margin-bottom: 12px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  max-width: 600px;
  margin: 0 auto;
`;

const InfoSection = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <InfoBox>
          <IconWrapper>
            <PuzzleIcon />
          </IconWrapper>
          <Headline>Have Fun</Headline>
          <Text>
            We believe that studying should be fun and provide all the support needed in order to grow your skills.
          </Text>
        </InfoBox>

        <InfoBox>
          <IconWrapperStroke>
            <GrowSkillsIcon />
          </IconWrapperStroke>
          <Headline>Grow Your Skills</Headline>
          <Text>
            Test your knowledge in multiple languages or topics, and get a
            detailed summary upon completion, including explanations and
            resource links
          </Text>
        </InfoBox>

        <InfoBox>
          <IconWrapperStroke>
            <OpenSourceIcon />
          </IconWrapperStroke>
          <Headline>Contribute to Open Source</Headline>
          <Text>
            Chingu believes in growing together. As a result, this project is
            purely open source, and everyone can contribute at any given time.
          </Text>
        </InfoBox>
      </InnerWrapper>
    </Wrapper>
  );
};

export default InfoSection;
