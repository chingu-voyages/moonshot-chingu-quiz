import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import {
  SubInfo,
  Headline,
  MidGreenBar,
  HeadingGroup,
} from "./styles";

const Wrapper = styled(SubInfo)`
  display: block;
  max-width: 990px;
  margin: 0 auto;
`;

const ContributionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ContributorBubble = styled.a`
  display: flex;
  width: 60px;
  height: 60px;
  margin: 8px 9px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`;

const Contributors = () => {
  const [contributors, setContributors] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/chingu-voyages/moonshot-chingu-quiz/contributors")
      .then(response => response.json())
      .then(json => setContributors(json));
  }, []);

  return contributors && contributors.length > 0 ? (
    <Wrapper>
      <HeadingGroup>
        <MidGreenBar />
        <Headline>Contributors</Headline>
      </HeadingGroup>

      <ContributionsWrapper>
        {
          contributors.map(contributor => (
            <ContributorBubble key={contributor.id} href={contributor.html_url} target="_blank" title={`${contributor.login} \nContributions: ${contributor.contributions}`}>
              <img src={contributor.avatar_url} alt={contributor.login} />
            </ContributorBubble>
          ))
        }
      </ContributionsWrapper>
    </Wrapper>
   ) : null;
};

export default Contributors;
