import React from "react";
import { TileContainer } from "./styles";
import { Heading4, TextBodySmall } from "../shared/styles";

export default function QuizTile({ quizData }) {
  return (
    <TileContainer>
      <Heading4>{quizData.title}</Heading4>
      <TextBodySmall>{quizData.description}</TextBodySmall>
    </TileContainer>
  );
}
