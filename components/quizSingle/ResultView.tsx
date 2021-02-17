import { useEffect, useState } from "react";
import { QuizRecord } from "~/models/ChinguQuiz/QuizRecord";
import { TextBody, TextBodySmall, TextBodyMicro } from "../shared/styles";
import { ResultTileContainer, ResultTile, TileTagContainer, QuizTileTag } from "./styles";
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
                  <TextBody><strong>Question:</strong> <br /> <code>{record.question}</code></TextBody>
                  <TextBodySmall><strong>Correct Answer:</strong> <br />  {record.correctAnswer}</TextBodySmall>
                  <TextBodySmall><strong>Your Answer:</strong> <br />  {record.userAnswer}</TextBodySmall>
                </div>
              </ResultTile>
            ))};
        </ResultTileContainer>
        </>
    )
};