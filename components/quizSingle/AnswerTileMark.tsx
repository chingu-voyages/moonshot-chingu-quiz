import React                    from "react";
import { AnswerTileMarkStyled } from "./styles";

export interface AnswerTileTextProps {
  mark: string;
}
export default function AnswerTileText({ mark }: AnswerTileTextProps) {
  return <AnswerTileMarkStyled>{mark}</AnswerTileMarkStyled>;
}
