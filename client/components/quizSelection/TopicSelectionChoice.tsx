import React from "react";
import { PrimaryButton, TextBodySmall } from "../shared/styles";
import { TopicSelectionItem } from "./styles";

interface TopicSelectionChoiceProps {
  buttonSize?: "small" | "default";
  currentlySelected: string[] | string;
  thisSelection: string;
  handleSetThisSelection(value: string): void;
}
export default function TopicSelectionChoice({
  buttonSize,
  currentlySelected,
  thisSelection,
  handleSetThisSelection,
}: TopicSelectionChoiceProps) {
  return (
    <TopicSelectionItem>
      <PrimaryButton
        mod={
          currentlySelected === thisSelection ||
          currentlySelected.includes(thisSelection)
            ? "fillLight"
            : (!buttonSize || buttonSize === "default") && "ghost"
        }
        size={!buttonSize ? "default" : buttonSize}
        onClick={() => {
          handleSetThisSelection(thisSelection);
        }}
      >
        <TextBodySmall>{thisSelection}</TextBodySmall>
      </PrimaryButton>
    </TopicSelectionItem>
  );
}
