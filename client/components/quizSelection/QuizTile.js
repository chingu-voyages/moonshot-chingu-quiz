import React from "react";
import { Heading4, TextBodySmall, TextBodyMicro } from "../shared/styles";
import { TileContainer, TileTagContainer, QuizTileTag } from "./styles";

export default function QuizTile({ quizData }) {
  return (
    <TileContainer>
      <div>
        <Heading4>{quizData.title}</Heading4>
        <TextBodySmall>{quizData.description}</TextBodySmall>
      </div>
      <TileTagContainer>
        {quizData.tags.map(tag => (
          <QuizTileTag>
            <TextBodyMicro>{tag}</TextBodyMicro>
          </QuizTileTag>
        ))}
      </TileTagContainer>
    </TileContainer>
  );
}
