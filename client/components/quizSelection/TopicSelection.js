import React from "react";
import {
  PrimaryButton,
  PrimaryButtonSmall,
  TextBodySmall,
} from "../shared/styles";
import {
  TopicSelectionContainer,
  TopicSelectionList,
  TopicSelectionItem,
} from "./styles";

export default function TopicSelection({
  subject,
  setChosenSubject,
  chosenTopics,
  setChosenTopics,
}) {
  const toggleTopics = topic => {
    if (chosenTopics.includes(topic)) {
      setChosenTopics(topics => topics.filter(t => t !== topic));
    } else {
      setChosenTopics(topics => [...topics, topic]);
    }
  };

  const handlePrimaryButtonClick = newSubject => {
    setChosenSubject(newSubject);
    setChosenTopics([]);
  };

  return (
    <TopicSelectionContainer>
      <TopicSelectionList>
        <TopicSelectionItem>
          <PrimaryButton
            mod={subject === "Programming" ? "fillLight" : "ghost"}
            onClick={() => {
              handlePrimaryButtonClick("Programming");
            }}
          >
            <TextBodySmall>Programming</TextBodySmall>
          </PrimaryButton>
        </TopicSelectionItem>
        <TopicSelectionItem>
          <PrimaryButton
            mod={subject === "UX" ? "fillLight" : "ghost"}
            onClick={() => {
              handlePrimaryButtonClick("UX");
            }}
          >
            <TextBodySmall>UX</TextBodySmall>
          </PrimaryButton>
        </TopicSelectionItem>
        <TopicSelectionItem>
          <PrimaryButton
            mod={subject === "Interview" ? "fillLight" : "ghost"}
            onClick={() => {
              handlePrimaryButtonClick("Interview");
            }}
          >
            <TextBodySmall>Interview</TextBodySmall>
          </PrimaryButton>
        </TopicSelectionItem>
      </TopicSelectionList>

      <TopicSelectionList>
        {subject === "Programming" && (
          <>
            <TopicSelectionItem>
              <PrimaryButtonSmall
                mod={chosenTopics.includes("html") ? "fillLight" : "ghost"}
                onClick={() => {
                  toggleTopics("html");
                }}
              >
                <TextBodySmall>HTML</TextBodySmall>
              </PrimaryButtonSmall>
            </TopicSelectionItem>
            <TopicSelectionItem>
              <PrimaryButtonSmall
                mod={chosenTopics.includes("css") ? "fillLight" : "ghost"}
                onClick={() => {
                  toggleTopics("css");
                }}
              >
                <TextBodySmall>CSS</TextBodySmall>
              </PrimaryButtonSmall>
            </TopicSelectionItem>
            <TopicSelectionItem>
              <PrimaryButtonSmall
                mod={
                  chosenTopics.includes("javascript") ? "fillLight" : "ghost"
                }
                onClick={() => {
                  toggleTopics("javascript");
                }}
              >
                <TextBodySmall>JavaScript</TextBodySmall>
              </PrimaryButtonSmall>
            </TopicSelectionItem>
          </>
        )}
      </TopicSelectionList>
    </TopicSelectionContainer>
  );
}
