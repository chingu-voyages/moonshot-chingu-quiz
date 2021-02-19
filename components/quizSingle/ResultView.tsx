import Link from "next/link";
import { QuizRecord } from "~/models/ChinguQuiz/QuizRecord";
import { Heading4, TextBodyBold, TextBodySmallBold } from "../shared/styles";
import { ResultTitleContainer, ResultTileContainer, ResultTile, CodeBlock, TileNumber, SubmitQuizBtnStyled } from "./styles";
import ScoreGraph from "./ScoreGraph";


export default function ResultView({quizTitle, quizRecord}: {quizTitle: string, quizRecord:QuizRecord[]}) {
    let percentage = Math.round((quizRecord.filter(r => r.correct).length * 100) / quizRecord.length);
    let totalQs = quizRecord.length;

    return (
        <>
        <ScoreGraph percentage={percentage} />

        <ResultTitleContainer>
            <Heading4>{quizTitle}</Heading4>
        </ResultTitleContainer>

        <ResultTileContainer>
        {quizRecord.map((record, i) => (
              <ResultTile correct={record.correct} animationDelay={`${100 + i * 50}ms`} key={`${quizTitle}-${i}`}>
                <div>
                  <TextBodyBold>Question: <TileNumber>{i+1}/{totalQs}</TileNumber></TextBodyBold>
                  <CodeBlock>{record.question}</CodeBlock>
                  <TextBodySmallBold>Correct Answer:</TextBodySmallBold>
                  <CodeBlock>{record.correctAnswer}</CodeBlock>
                  <TextBodySmallBold>Your Answer:</TextBodySmallBold>
                  <CodeBlock>{record.userAnswer}</CodeBlock>
                </div>
              </ResultTile>
            ))}
        </ResultTileContainer>

        <ResultTitleContainer>
        <Link href="/quizzes">
            <SubmitQuizBtnStyled>
              <Heading4>{"Try Another >"}</Heading4>
            </SubmitQuizBtnStyled>
          </Link>
        </ResultTitleContainer>
        </>
    )
};