import React from "react";
import { PrimaryButton, TextBodySmall } from "../shared/styles";
import { TopicSelectionItem } from "./styles";

export default function TopicSelectionChoice({
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
            : "ghost"
        }
        onClick={() => {
          handleSetThisSelection(thisSelection);
        }}
      >
        <TextBodySmall>{thisSelection}</TextBodySmall>
      </PrimaryButton>
    </TopicSelectionItem>
  );
}
