import styled from "styled-components";
import { breakpoint } from "../../frontend-config";
import { PrimaryButton, riseUp } from "../shared/styles";

export const QuizzesHeader = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  background: ${props => props.theme.colors.grey};
`;

export const TileSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  grid-gap: 50px 30px;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 10px auto;

  @media only screen and (min-width: ${breakpoint("xs")}) {
    width: 95%;
    max-width: ${breakpoint("maxWidth")};
    margin: 25px auto;
  }
`;

export const TileContainer = styled.div`
  opacity: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  height: 130px;
  padding: 8px 12px;
  margin: auto;
  background: transparent;
  border-left: 10px solid ${props => props.theme.colors.darkGreen};
  border-radius: 5px;
  box-shadow: 1px 1px 10px ${props => props.theme.colors.lightGrey};
  transition-duration: 350ms;
  animation: ${riseUp} 400ms ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.animationDelay};

  &:hover {
    box-shadow: 10px 3px 18px ${props => props.theme.colors.lightGrey};
    cursor: pointer;
  }

  @media only screen and (min-width: ${breakpoint("xs")}) {
    width: 375px;
  }
`;

export const TileTagContainer = styled.span`
  display: flex;
  fled-flow: row nowrap;
`;

export const TopicSelectionContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  width: 95%;
  padding: 0;
  margin: 20px auto 30px auto;
`;

export const TopicSelectionList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  width: 100%;
  min-height: 30px;
  margin: 5px auto;
  list-style: none;
`;

export const TopicSelectionItem = styled.li`
  width: max-content;
  padding: 0;
  margin-right: 15px;
`;

export const QuizTileTag = styled(PrimaryButton)`
  padding: 1px 5px;
  margin: 5px 5px 0 0;
`;
