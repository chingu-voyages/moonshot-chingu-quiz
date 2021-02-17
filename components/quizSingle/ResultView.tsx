import { useEffect, useState } from "react";
import { QuizRecord } from "~/models/ChinguQuiz/QuizRecord";
import { TextBodyBold, TextBodySmallBold } from "../shared/styles";
import { ResultTileContainer, ResultTile, CodeBlock } from "./styles";
import ScoreGraph from "./ScoreGraph";


export default function ResultView({quizRecord}: {quizRecord:QuizRecord[]}) {
    let percentage = Math.round((quizRecord.filter(r => r.correct).length * 100) / quizRecord.length);

    return (
        <>
        <ScoreGraph percentage={percentage} />
        <ResultTileContainer>
        {quizRecord.map((record, i) => (
                <ResultTile correct={record.correct} animationDelay={`${100 + i * 50}ms`}>
                <div>
                  <TextBodyBold>Question:</TextBodyBold>
                  <CodeBlock>{record.question}</CodeBlock>
                  <TextBodySmallBold>Correct Answer:</TextBodySmallBold>
                  <CodeBlock>{record.correctAnswer}</CodeBlock>
                  <TextBodySmallBold>Your Answer:</TextBodySmallBold>
                  <CodeBlock>{record.userAnswer}</CodeBlock>
                </div>
              </ResultTile>
            ))};
        </ResultTileContainer>
        </>
    )
};