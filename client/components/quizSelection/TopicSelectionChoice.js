import React from "react";
import { PrimaryButton, TextBodySmall } from "../shared/styles";
import { TopicSelectionItem } from "./styles";

export default function TopicSelectionChoice({
  buttonSize,
  currentlySelected,
  thisSelection,
  handleSetThisSelection,
}) {
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
