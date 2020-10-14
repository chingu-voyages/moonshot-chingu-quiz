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
  grid-gap: 20px;
  justify-content: space-evenly;
  justify-items: start;
  align-items: center;
  width: 100%;
  margin: 10px auto;

  @media (min-width: ${breakpoint("md")}) {
    grid-gap: 50px 30px;
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
  width: 90%;
  height: 130px;
  padding: 8px 12px;
  margin: 10px auto;
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

  @media (min-width: ${breakpoint("md")}) {
    width: 375px;
    margin: 0;
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
  align-items: start;
  width: 100%;
  max-width: ${breakpoint("maxWidth")};
  padding: 0;
  margin: 25px auto;

  @media (min-width: ${breakpoint("md")}) {
    width: 95%;
  }
`;

export const TopicSelectionList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  max-width: 100%;
  min-height: 30px;
  margin: 5px 0;
  list-style: none;
  overflow-x: auto;

  @media (max-width: ${breakpoint("md")}) {
    padding-left: 15px;
    scrollbar-width: none; /* Hide horizontal scrollbar on mobile for Firefox */

    &::-webkit-scrollbar {
      display: none; /* Hide horizontal scrollbar on mobile for Chrome, Safari, Opera */
    }
  }
`;

export const TopicSelectionItem = styled.li`
  position: relative;
  width: max-content;
  padding: 0;
  margin-right: 15px;
  }

  &:last-child:after {
    position: absolute;
    right: -15px;
    bottom: 5px;
    content: "";
    display: block;
    width: 15px;
    height: 1px;
  }
`;

export const QuizTileTag = styled(PrimaryButton)`
  padding: 1px 5px;
  margin: 5px 5px 0 0;
`;
