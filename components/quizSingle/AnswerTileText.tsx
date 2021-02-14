import React                    from "react";
import { TextBodyBold }         from "../shared/styles";
import { AnswerTileTextStyled } from "./styles";

interface AnswerTileTextProps {
  text: string
}

export default function AnswerTileText({ text }: AnswerTileTextProps) {
  return (
    <AnswerTileTextStyled>
      <TextBodyBold>{text}</TextBodyBold>
    </AnswerTileTextStyled>
  );
}
