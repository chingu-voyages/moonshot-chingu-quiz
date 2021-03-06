import React from "react";
import { Heading4 } from "../shared/styles";
import { SubmitQuizBtnStyled, DisabledSubmitQuizBtnStyled } from "./styles";

interface SubmitQuizBtnProps {
  disabled?: Boolean;
}

export default function SubmitQuizBtn({ disabled }: SubmitQuizBtnProps) {
  return disabled ? (
    <DisabledSubmitQuizBtnStyled>
      <Heading4>Submit</Heading4>
    </DisabledSubmitQuizBtnStyled>
  ) : (
    <SubmitQuizBtnStyled>
      <Heading4>Submit</Heading4>
    </SubmitQuizBtnStyled>
  );
}
