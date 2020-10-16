import React from "react";
import styled from "styled-components";
import { breakpoint } from "../../frontend-config";

const Wrapper = styled.div`
  background: ${props => props.theme.colors.light};
  padding: 30px 20px 50px;
  width: 100%;

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

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 25px;
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
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#333"
            >
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
          </Icon>
          <Headline>Have Fun</Headline>
          <Text>
            At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
            iuvaret vulputate sed.
          </Text>
        </InfoBox>

        <InfoBox>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                stroke="#333"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </Icon>
          <Headline>Grow Your Skills</Headline>
          <Text>
            Test your knowledge in multiple languages or topics, and get a
            detailed summary upon completion, including explanations and
            resource links
          </Text>
        </InfoBox>

        <InfoBox>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#333"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </Icon>
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
