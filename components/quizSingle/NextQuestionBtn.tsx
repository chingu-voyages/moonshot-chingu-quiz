import React                                                    from "react";
import { Heading4 }                                             from "../shared/styles";
import { NextQuestionBtnStyled, DisabledNextQuestionBtnStyled } from "./styles";

interface NextQuestionBtnProps {
  disabled?: Boolean;
}

export default function NextQuestionBtn({ disabled }: NextQuestionBtnProps) {
  return disabled ? (
    <DisabledNextQuestionBtnStyled>
      <Heading4>NEXT</Heading4>
    </DisabledNextQuestionBtnStyled>
  ) : (
    <NextQuestionBtnStyled>
      <Heading4>NEXT</Heading4>
    </NextQuestionBtnStyled>
  );
}
