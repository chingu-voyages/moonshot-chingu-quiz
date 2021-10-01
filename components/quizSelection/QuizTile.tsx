import React from "react";
import Link                                             from "next/link";
import { Heading4, TextBodySmall, TextBodyMicro }       from "../shared/styles";
import { TileContainer, TileTagContainer, QuizTileTag } from "./styles";
import type { ChinguQuiz }                              from "../../models";

interface QuizTileProps {
  quizData: ChinguQuiz.Quiz;
  animationDelay: number | string;
}
export default function QuizTile({ quizData, animationDelay }: QuizTileProps) {
  return (
    <Link href={`/quiz/${quizData.id}`}>
      <TileContainer animationDelay={animationDelay}>
        <header>
          <Heading4>{quizData.title}</Heading4>
          <TextBodySmall>{quizData.description}</TextBodySmall>
        </header>
        <TileTagContainer>
          {quizData.tag.map(tag => (
            <QuizTileTag key={tag}>
              <TextBodyMicro>{tag}</TextBodyMicro>
            </QuizTileTag>
          ))}
        </TileTagContainer>
      </TileContainer>
    </Link>
  );
}
