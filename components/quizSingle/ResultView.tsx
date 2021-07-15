import Link from "next/link";
import { QuizRecord } from "../../models/ChinguQuiz/QuizRecord";
import { Heading4, TextBodyBold, TextBodySmallBold } from "../shared/styles";
import {
  ResultPageContainer,
  ResultTitleContainer,
  ResultTileContainer,
  ResultTile,
  CodeBlock,
  TileNumber,
  SubmitQuizBtnStyled,
} from "./styles";
import ScoreGraph from "./ScoreGraph";
import { useContext } from "react";
import { QuizContext } from "../../contexts/quiz-context";

export default function ResultView({
  quizTitle,
  quizRecord,
}: {
  quizTitle: string;
  quizRecord: QuizRecord[];
}) {
  const { timer } = useContext(QuizContext);
  const percentage = Math.round(
    (quizRecord.filter(r => r.correct).length * 100) / quizRecord.length
  );
  const totalQs = quizRecord.length;

  return (
    <ResultPageContainer>
      <div>
        <ScoreGraph percentage={percentage} />
        <p style={{ textAlign: "center", padding: "32px 4px" }}>
          Total Time: {timer} seconds
        </p>
      </div>

      <div>
        <ResultTitleContainer>
          <Heading4>{quizTitle}</Heading4>
        </ResultTitleContainer>

        <ResultTileContainer>
          {quizRecord.map((record, i) => (
            <ResultTile
              correct={record.correct}
              animationDelay={`${100 + i * 50}ms`}
              key={`${quizTitle}-${i}`}
            >
              <div>
                <TextBodyBold>
                  Question:{" "}
                  <TileNumber>
                    {i + 1}/{totalQs}
                  </TileNumber>
                </TextBodyBold>
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
      </div>
    </ResultPageContainer>
  );
}
