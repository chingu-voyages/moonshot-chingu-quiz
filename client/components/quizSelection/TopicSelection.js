import React from 'react';
import { TopicSelectionContainer, TopicSelectionList, TopicSelectionItem } from './styles';
import { PrimaryButton, PrimaryButtonSmall, TextBodySmall } from '../shared/styles';

export default function TopicSelection({ subject, setChosenSubject, chosenTopics, setChosenTopics }) {

  const toggleTopics = (topic) => {
    if (chosenTopics.includes(topic)) {
      setChosenTopics(topics => topics.filter(t => t !== topic));
    } else {
      setChosenTopics(topics => [...topics, topic]);
    }
  };

  return (
    <TopicSelectionContainer>
      <TopicSelectionList>
        <TopicSelectionItem>
          <PrimaryButton activeLight={subject === "Programming"} onClick={() => {setChosenSubject("Programming"); setChosenTopics([])}}>
            <TextBodySmall>Programming</TextBodySmall>
          </PrimaryButton>
        </TopicSelectionItem>
        <TopicSelectionItem>
          <PrimaryButton activeLight={subject === "UX"} onClick={() => {setChosenSubject("UX"); setChosenTopics([])}}>
            <TextBodySmall>UX</TextBodySmall>
          </PrimaryButton>
        </TopicSelectionItem>
        <TopicSelectionItem>
          <PrimaryButton activeLight={subject === "Interview"} onClick={() => {setChosenSubject("Interview"); setChosenTopics([])}}>
            <TextBodySmall>Interview</TextBodySmall>
          </PrimaryButton>
        </TopicSelectionItem>
      </TopicSelectionList>

      <TopicSelectionList>
        {
          subject === "Programming" && (
            <>
              <TopicSelectionItem>
                <PrimaryButtonSmall activeLight={chosenTopics.includes("HTML")} onClick={() => {toggleTopics("HTML")}}>
                  <TextBodySmall>HTML</TextBodySmall>
                </PrimaryButtonSmall>
              </TopicSelectionItem>
              <TopicSelectionItem>
                <PrimaryButtonSmall activeLight={chosenTopics.includes("CSS")} onClick={() => {toggleTopics("CSS")}}>
                  <TextBodySmall>CSS</TextBodySmall>
                </PrimaryButtonSmall>
              </TopicSelectionItem>
              <TopicSelectionItem>
                <PrimaryButtonSmall activeLight={chosenTopics.includes("JavaScript")} onClick={() => {toggleTopics("JavaScript")}}>
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
