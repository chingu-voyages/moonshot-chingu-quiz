import React from "react";
import { TextBodyBold } from "../shared/styles";
import { AnswerTileTextStyled } from "./styles";

export default function AnswerTileText({ text }) {
  return (
    <AnswerTileTextStyled>
      <TextBodyBold>{text}</TextBodyBold>
    </AnswerTileTextStyled>
  );
}
