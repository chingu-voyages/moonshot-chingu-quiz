import React from "react";
import TopicSelectionChoice from "./TopicSelectionChoice";
import { TopicSelectionContainer, TopicSelectionList } from "./styles";

export default function TopicSelection({
  subjectsAndTopics,
  chosenSubject,
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
        {chosenSubject !== "Random" &&
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
