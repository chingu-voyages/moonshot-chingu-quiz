import styled from "styled-components";
import { breakpoint } from "../../frontend-config";
import { PrimaryButton, riseUp } from "../shared/styles";

export const QuestionHeaderContainer = styled.section`
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

export const QuestionProgressBarFiller = styled.div`
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
  align-items: right;
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

export const AnswerTileContainerStyled = styled.div`
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
  background: transparent;
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

export const QuizQuestionBtnContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const QuizQuestionBtnStyled = styled(PrimaryButton)`
  width: 255px;
  margin: 40px auto;
  border: ${props => props.theme.colors.darkGreen} 5px solid;
`;

export const ContentWrapper = styled.div`
  width: ${breakpoint("maxWidth")};
  max-width: calc(100% - 70px);
  margin: 0 auto;
  color: ${props => props.theme.colors.light};
`;
