import React from "react";
import TopicSelectionChoice from "./TopicSelectionChoice";
import { TopicSelectionContainer, TopicSelectionList } from "./styles";
import type { ChinguQuiz, UI } from '~/models'

interface TopicSelectionProps {
  subjectsAndTopics: UI.Quizzes.SubjectAndTopic[]
  chosenSubject: string
  setChosenSubject(subject: string): void
  chosenTopics: string[]
  setChosenTopics: React.Dispatch<React.SetStateAction<string[]>>
}
export default function TopicSelection({
  subjectsAndTopics,
  chosenSubject,
  setChosenSubject,
  chosenTopics,
  setChosenTopics,
}: TopicSelectionProps) {

  const toggleTopics = (topic: string) => {
    if (chosenTopics.includes(topic)) {
      setChosenTopics(topics => topics.filter(t => t !== topic));
    } else {
      setChosenTopics(topics => [...topics, topic]);
    }
  };

  const handlePrimaryButtonClick = (newSubject: string) => {
    setChosenSubject(newSubject);
    setChosenTopics([]);
  };

  return (
    <TopicSelectionContainer>
      <TopicSelectionList>
        {subjectsAndTopics.map(subject => (
          <TopicSelectionChoice
            key={subject.key}
            currentlySelected={chosenSubject}
            thisSelection={subject.title}
            handleSetThisSelection={handlePrimaryButtonClick}
          />
        ))}
      </TopicSelectionList>

      <TopicSelectionList>
        {chosenSubject !== "All" &&
          subjectsAndTopics
            .filter(subj => subj.title === chosenSubject)[0]
            .tags.map(topic => (
              <TopicSelectionChoice
                key={topic}
                buttonSize="small"
                currentlySelected={chosenTopics}
                thisSelection={topic}
                handleSetThisSelection={toggleTopics}
              />
            ))}
      </TopicSelectionList>
    </TopicSelectionContainer>
  );
}
