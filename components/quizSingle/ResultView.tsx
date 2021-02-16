import { useEffect, useState } from "react";
import { QuizRecord } from "~/models/ChinguQuiz/QuizRecord";
import ScoreGraph from "./ScoreGraph";


export default function ResultView({quizRecord}: {quizRecord:QuizRecord[]}) {
    let percentage = Math.round((quizRecord.filter(r => r.correct).length * 100) / quizRecord.length);

    return (
        <>
        <ScoreGraph percentage={percentage} />
        <ul>
        {quizRecord.map((record, i) => (
                <li key={record.correctAnswer.substring(0, 6)}>
                    <p>Question: {record.question} </p>
                    <p>Your Answer:{record.userAnswer}</p>
                    <p>Correct Answer:{record.correctAnswer}</p>
                </li>
            ))};
        </ul>
        </>
    )
};