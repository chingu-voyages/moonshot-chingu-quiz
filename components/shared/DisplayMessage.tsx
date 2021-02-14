import React                                              from "react";
import { FullWidthContainer, MessageContainer, Heading3 } from "./styles";

interface DisplayMessageProps {
  message: string;
}
export default function DisplayMessage({ message }: DisplayMessageProps) {
  return (
    <FullWidthContainer>
      <MessageContainer>
        <Heading3>{message}</Heading3>
      </MessageContainer>
    </FullWidthContainer>
  );
}
