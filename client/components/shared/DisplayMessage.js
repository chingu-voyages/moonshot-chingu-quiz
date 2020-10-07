import React from "react";
import { FullWidthContainer, MessageContainer, Heading3 } from "./styles";

export default function DisplayMessage({ message }) {
  return (
    <FullWidthContainer>
      <MessageContainer>
        <Heading3>{message}</Heading3>
      </MessageContainer>
    </FullWidthContainer>
  );
}
