import React from "react";
import styled from "styled-components";
import { breakpoint } from "../../frontend-config";

import {
  SubInfo,
  Logo,
  InfoBox,
  Headline,
  Text,
  GreenBar,
  HeadingGroup,
} from "./styles";

import { ABOUT_DATA } from "./Resources";
import { HEADER_DATA } from "./Resources";

const InfoSection = () => {
  return (
    <>
      <SubInfo>
        <Logo src="/Home.png" />
        <InfoBox>
          <HeadingGroup>
            <GreenBar />
            <Headline>{HEADER_DATA.title}</Headline>
          </HeadingGroup>
          <Text>{HEADER_DATA.text}</Text>
        </InfoBox>
      </SubInfo>

      {/* looping data from Resources.js */}
      {ABOUT_DATA.map(data => {
        return data.id % 2 === 0 ? (
          <SubInfo key={data.id}>
            {data.svg}
            <InfoBox>
              <HeadingGroup>
                <GreenBar />
                <Headline>{data.title}</Headline>
              </HeadingGroup>
              {<Text>{data.text}</Text>}
            </InfoBox>
          </SubInfo>
        ) : (
          <SubInfo key={data.id} grey>
            {data.svg}
            <InfoBox>
              <HeadingGroup>
                <GreenBar />
                <Headline light>{data.title}</Headline>
              </HeadingGroup>
              {<Text light>{data.text}</Text>}
            </InfoBox>
          </SubInfo>
        );
      })}
    </>
  );
};

export default InfoSection;
