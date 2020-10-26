import React from "react";

import { Heading3, TextBodyBold } from "../shared/styles";
import {
  QuestionHeaderContainer,
  QuestionProgressBar,
  QuestionProgressBarFiller,
  QuestionProgressBarText,
} from "./styles";

export default function QuestionHeader({
  questionData,
  questionIndex,
  questionCount,
  animationDelay,
}) {
  return (
    <QuestionHeaderContainer animationDelay={animationDelay}>
      <QuestionProgressBarText>
        <TextBodyBold>
          {`Question ${questionIndex} / ${questionCount}`}
        </TextBodyBold>
      </QuestionProgressBarText>
      <QuestionProgressBar>
        <QuestionProgressBarFiller
          completion={(questionIndex / questionCount) * 100}
        />
      </QuestionProgressBar>
      <br />
      <Heading3>{questionData.prompt}</Heading3>
    </QuestionHeaderContainer>
  );
}
