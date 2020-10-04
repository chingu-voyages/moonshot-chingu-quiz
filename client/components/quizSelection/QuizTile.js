import React from "react";
import { TileContainer, TileImage, TileBody } from "./styles";
import { Heading4, TextBodySmall } from "../shared/styles";

export default function QuizTile({ quizData }) {
  return (
    <TileContainer>
      <TileImage src="/CSS3_Logo_200.png" />
      <TileBody>
        <Heading4>{quizData.title}</Heading4>
        <TextBodySmall>{quizData.description}</TextBodySmall>
      </TileBody>
    </TileContainer>
  );
}
