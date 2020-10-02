import React from 'react';
import { TopicSelectionContainer, TopicSelectionList, TopicSelectionItem } from './styles';
import { PrimaryButton, PrimaryButtonSmall, TextBodySmall } from '../shared/styles';

export default function TopicSelection({ subject }) {
  return (
    <TopicSelectionContainer>
      <TopicSelectionList>
        <TopicSelectionItem>
          <PrimaryButton activeLight>
            <TextBodySmall>Programming</TextBodySmall>
          </PrimaryButton>
        </TopicSelectionItem>
        <TopicSelectionItem>
          <PrimaryButton>
            <TextBodySmall>UX</TextBodySmall>
          </PrimaryButton>
        </TopicSelectionItem>
        <TopicSelectionItem>
          <PrimaryButton>
            <TextBodySmall>Interview</TextBodySmall>
          </PrimaryButton>
        </TopicSelectionItem>
      </TopicSelectionList>
      {
        subject === "Programming" &&
        (
          <TopicSelectionList>
            <TopicSelectionItem>
              <PrimaryButtonSmall activeLight>
                <TextBodySmall>HTML</TextBodySmall>
              </PrimaryButtonSmall>
            </TopicSelectionItem>
            <TopicSelectionItem>
              <PrimaryButtonSmall>
                <TextBodySmall>CSS</TextBodySmall>
              </PrimaryButtonSmall>
            </TopicSelectionItem>
            <TopicSelectionItem>
              <PrimaryButtonSmall>
                <TextBodySmall>JavaScript</TextBodySmall>
              </PrimaryButtonSmall>
            </TopicSelectionItem>
          </TopicSelectionList>
        )
      }
    </TopicSelectionContainer>
  );
}
