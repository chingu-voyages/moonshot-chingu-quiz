import React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../../frontend-config";

const Wrapper = styled.div`
  background: ${props => props.theme.colors.grey};
  padding: 45px 25px 65px;

  @media (min-width: ${breakpoint("lg")}) {
    padding: 115px 25px 190px;
  }
`;

const Title = styled.h2`
  font-size: 39px;
  font-weight: bold;
  color: ${props => props.theme.colors.light};
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 48px;
  margin: 32px 0;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid #18e28c;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  margin-right: 24px;
  padding: 10px 20px;

  &:last-of-type {
    margin-right: 0;
  }

  ${props =>
    props.light &&
    css`
      background: ${props.theme.colors.midGreen};
      color: ${props.theme.colors.grey};
    `}

  ${props =>
    props.dark &&
    css`
      background: ${props.theme.colors.grey};
      color: ${props.theme.colors.midGreen};
    `}
`;

const Info = styled.p`
  color: ${props => props.theme.colors.light};
`;

const HeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Resources</Title>

        <ButtonsWrapper>
          <a
            href="https://github.com/chingu-voyages/moonshot-chingu-quiz"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Button light>Github Repo</Button>
          </a>

          <a
            href="https://www.figma.com/file/2mKq8rdawiJO6EEVwugWYp/Chingu_Mockups?node-id=84%3A198"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Button dark>Figma Design</Button>
          </a>

          <a
            href="https://github.com/chingu-voyages/ChinguResourceList/blob/development/docs/COLLABORATOR_GUIDE.md"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Button dark>Collaborator Guide</Button>
          </a>

          <a
            href="https://discord.gg/rEfmg4"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Button dark>Discord Chat</Button>
          </a>
        </ButtonsWrapper>

        <Info>
          If you have any questions please comment on the issue you’re working
          on. Or for something more general join in on our Chingu Discord chat -
          #chinguquiz-contributors
        </Info>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;
