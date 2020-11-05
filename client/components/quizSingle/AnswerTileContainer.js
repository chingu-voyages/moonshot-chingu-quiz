import React from "react";
import { AnswerTileContainerStyled } from "./styles";
import AnswerTileMark from "./AnswerTileMark";
import AnswerTileText from "./AnswerTileText";

export default function AnswerTileContainer({ mark, answerData, selected }) {
  return (
    <AnswerTileContainerStyled selected={selected}>
      <AnswerTileMark mark={mark} />
      <AnswerTileText text={answerData.prompt} />
    </AnswerTileContainerStyled>
  );
}
