import React from "react";

import {
  SubInfo,
  Logo,
  InfoBox,
  Headline,
  Text,
  MidGreenBar,
  HeadingGroup,
} from "./styles";

import { ABOUT_DATA, HEADER_DATA } from "./Resources";

const InfoSection = () => {
  return (
    <>
      <SubInfo>
        <Logo src="/Home.png" />
        <InfoBox>
          <HeadingGroup>
            <MidGreenBar />
            <Headline>{HEADER_DATA.title}</Headline>
          </HeadingGroup>
          <Text>{HEADER_DATA.text}</Text>
        </InfoBox>
      </SubInfo>

      {/* looping data from Resources.js */}
      {ABOUT_DATA.map(data => {
        const darkSection = data.id % 2 !== 0;
        return (
          <SubInfo key={data.id} grey={darkSection}>
            {data.svg}
            <InfoBox>
              <HeadingGroup>
                <MidGreenBar />
                <Headline light={darkSection}>{data.title}</Headline>
              </HeadingGroup>
              <Text light={darkSection}>{data.text}</Text>
            </InfoBox>
          </SubInfo>
        );
      })}
    </>
  );
};

export default InfoSection;
