import React from 'react';
import { TileContainer, TileImage, TileBody } from './styles.js';
import { Heading4, TextBodySmall } from '../shared/styles.js';

export default function Home() {
  return (
    <TileContainer>
      <TileImage src='/CSS3_Logo_200.png' />
      <TileBody>
        <Heading4>Quiz Title</Heading4>
        <TextBodySmall>This is the description for this quiz</TextBodySmall>
      </TileBody>
    </TileContainer>
  );
}
