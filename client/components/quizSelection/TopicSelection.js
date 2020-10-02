import React from 'react';
import { TopicSelectionContainer, TopicSelectionList, TopicSelectionItem } from './styles';
import { TextBodySmall } from '../shared/styles';

export default function TopicSelection() {
  return (
    <TopicSelectionContainer>
      <TopicSelectionList>
        <TopicSelectionItem>
          <TextBodySmall>Programming</TextBodySmall>
        </TopicSelectionItem>
      </TopicSelectionList>
    </TopicSelectionContainer>
  );
}
