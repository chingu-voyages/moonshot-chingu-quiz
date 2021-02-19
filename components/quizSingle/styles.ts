import styled, { keyframes } from "styled-components";
import { breakpoint } from "../../frontend-config";
import { PrimaryButton, riseUp } from "../shared/styles";

// -- Animations -- //
export const progress = keyframes`
  0% {
    stroke-dasharray: 0 100;
  }
`;

export const QuestionHeaderContainer = styled.section<{
  animationDelay: number;
}>`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90%;
  margin: 10px auto 40px auto;
  transition-duration: 350ms;
  animation: ${riseUp} 400ms ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.animationDelay};

  @media (min-width: ${breakpoint("md")}) {
    max-width: 850px;
    margin: 40px auto;
  }
`;

export const QuestionProgressBar = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: 16px;
  margin-bottom: 40px;
  border: 2px black solid;
  border-radius: 10px;

  @media (min-width: ${breakpoint("md")}) {
    width: 95%;
    max-width: ${breakpoint("maxWidth")};
    margin-bottom: 40px;
  }
`;

export const QuestionProgressBarFiller = styled.div<{
  completion: number;
}>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background: rgb(24, 226, 140);
  background: linear-gradient(
    90deg,
    rgba(24, 226, 140, 1) ${props => props.completion}%,
    rgba(255, 255, 255, 1) ${props => props.completion}%
  );
`;

export const QuestionProgressBarText = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  width: 100%;
  margin-top: 40px;
  font-weight: bolder;

  @media (min-width: ${breakpoint("md")}) {
    width: 95%;
    max-width: ${breakpoint("maxWidth")};
  }
`;

export const AnswersTileSection = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, min(98%, 375px));
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px auto;

  @media (min-width: ${breakpoint("md")}) {
    grid-template-columns: repeat(2, min(45%, 406px));
    grid-gap: 50px 30px;
    justify-items: center;
    width: 95%;
    max-width: ${breakpoint("maxWidth")};
    margin: 25px auto;
  }
`;

export const AnswerTileContainerLink = styled.a`
  width: 100%;
`;

export const AnswerTileContainerStyled = styled.div<{
  animationDelay?: string;
  selected?: boolean;
}>`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: start;
  max-width: 375px;
  width: 100%;
  min-height: 90px;
  padding: 8px 12px;
  margin: 10px auto;
  border-radius: 5px;
  box-shadow: 1px 1px 10px ${props => props.theme.colors.lightGrey};
  transition-duration: 350ms;
  animation: ${riseUp} 400ms ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.animationDelay};
  background-color: ${props =>
    props.selected ? props.theme.colors.midGreen : "white"};
  color: ${props => (props.selected ? "white" : "black")};

  &:hover {
    box-shadow: 10px 3px 18px ${props => props.theme.colors.lightGrey};
    cursor: pointer;
  }

  @media (min-width: ${breakpoint("md")}) {
    max-width: 406px;
    width: 100%;
    margin: 0;
  }
`;
export const AnswerTileMarkStyled = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 20%;
  height: 100%;
  background-color: ${props => props.theme.colors.darkGreen};
  color: white;
  font-size: 39px;
  font-weight: bold;
  border-radius: 5px;
`;

export const AnswerTileTextStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  top: 0;
  margin-left: 20%;
  width: 80%;
`;

export const NextQuestionBtnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const NextQuestionBtnStyled = styled(PrimaryButton)`
  width: 255px;
  margin: 40px auto;
  border: ${props => props.theme.colors.darkGreen} 5px solid;
`;

export const DisabledNextQuestionBtnStyled = styled(PrimaryButton)`
  width: 255px;
  margin: 40px auto;
  border: ${props => props.theme.colors.lightGrey} 5px solid;
  color: ${props => props.theme.colors.lightGrey};
  cursor: not-allowed;
`;

export const SubmitQuizBtnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const SubmitQuizBtnStyled = styled(PrimaryButton)`
  width: 255px;
  margin: 40px auto;
  border: ${props => props.theme.colors.darkGreen} 5px solid;
`;

export const DisabledSubmitQuizBtnStyled = styled(PrimaryButton)`
  width: 255px;
  margin: 40px auto;
  border: ${props => props.theme.colors.lightGrey} 5px solid;
  color: ${props => props.theme.colors.lightGrey};
  cursor: not-allowed;
`;

export const ContentWrapper = styled.div`
  width: ${breakpoint("maxWidth")};
  max-width: calc(100% - 70px);
  margin: 0 auto;
  color: ${props => props.theme.colors.light};
`;

export const ResultTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 25px;
`;

export const ResultPageContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: ${breakpoint("lg")}) {
    flex-flow: row-reverse nowrap;
  }
`;

export const ResultTileContainer = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  max-width: 700px;
  padding: 0;
  margin: 10px auto;
`;

export const ResultTile = styled.li<{
  animationDelay: number | string;
  correct: boolean;
}>`
  opacity: 0;
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  height: max-content;
  padding: 8px 12px;
  margin: 20px auto;
  border-left: 10px solid
    ${props =>
      props.correct
        ? props.theme.colors.darkGreen
        : props.theme.colors.lightGrey};
  border-radius: 5px;
  box-shadow: 1px 1px 10px ${props => props.theme.colors.lightGrey};
  transition-duration: 400ms;
  animation: ${riseUp} 400ms ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.animationDelay};
`;

export const CodeBlock = styled.div`
  width: 100%;
  padding: 10px;
  margin: 5px 0 10px 0;
  background: ${props => props.theme.colors.lightGrey};
  border-radius: 5px;
  font-family: monospace;
`;

export const TileNumber = styled.span`
  position: absolute;
  top: 8px;
  right: 15px;
`;

export const GraphSVG = styled.svg`
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;

  @media (min-width: ${breakpoint("lg")}) {
    transform: scale(1.1);
    position: sticky;
    top: 200px;
    width: 30%;
    margin-top: 78px;
  }
`;

export const GraphPathBG = styled.path`
  fill: none;
  stroke: #eee;
  stroke-width: 3.8;
`;

export const GraphPath = styled.path`
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: ${progress} 2s ease-out forwards;
`;

export const GraphText = styled.text`
  fill: #666;
  font-family: sans-serif;
  font-size: 0.5em;
  text-anchor: middle;
`;
