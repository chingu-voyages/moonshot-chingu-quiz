import React                         from "react";
import { AnswerTileContainerStyled } from "./styles";
import AnswerTileMark                from "./AnswerTileMark";
import AnswerTileText                from "./AnswerTileText";
import type { ChinguQuiz }           from "../../models";

interface AnswerTileContainerProps {
  mark?: string;
  answerData?: ChinguQuiz.Answer;
  selected?: boolean;
}
export default function AnswerTileContainer({
  mark,
  answerData,
  selected,
}: AnswerTileContainerProps) {
  return mark && answerData && answerData.prompt ? (
    <AnswerTileContainerStyled selected={selected}>
      <AnswerTileMark mark={mark} />
      <AnswerTileText text={answerData.prompt} />
    </AnswerTileContainerStyled>
  ) : null;
}
