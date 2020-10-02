import React from 'react';
import { TopicSelectionContainer, TopicSelectionList, TopicSelectionItem } from './styles';
import { PrimaryButton, PrimaryButtonSmall, TextBodySmall } from '../shared/styles';

export default function TopicSelection({ subject, setChosenSubject }) {
  return (
    <TopicSelectionContainer>
      <TopicSelectionList>
        <TopicSelectionItem>
          <PrimaryButton activeLight={subject === "Programming"} onClick={() => {setChosenSubject("Programming")}}>
            <TextBodySmall>Programming</TextBodySmall>
          </PrimaryButton>
        </TopicSelectionItem>
        <TopicSelectionItem>
          <PrimaryButton activeLight={subject === "UX"} onClick={() => {setChosenSubject("UX")}}>
            <TextBodySmall>UX</TextBodySmall>
          </PrimaryButton>
        </TopicSelectionItem>
        <TopicSelectionItem>
          <PrimaryButton activeLight={subject === "Interview"} onClick={() => {setChosenSubject("Interview")}}>
            <TextBodySmall>Interview</TextBodySmall>
          </PrimaryButton>
        </TopicSelectionItem>
      </TopicSelectionList>

      <TopicSelectionList>
        {
          subject === "Programming" && (
            <>
              <TopicSelectionItem>
                <PrimaryButtonSmall activeLight>
                  <TextBodySmall>HTML</TextBodySmall>
                </PrimaryButtonSmall>
              </TopicSelectionItem>
              <TopicSelectionItem>
                <PrimaryButtonSmall>
                  <TextBodySmall>CSS</TextBodySmall>
                </PrimaryButtonSmall>
              </TopicSelectionItem>
              <TopicSelectionItem>
                <PrimaryButtonSmall>
                  <TextBodySmall>JavaScript</TextBodySmall>
                </PrimaryButtonSmall>
              </TopicSelectionItem>
            </>
          )
        }
      </TopicSelectionList>

    </TopicSelectionContainer>
  );
}
