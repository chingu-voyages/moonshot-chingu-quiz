import { useEffect, useState } from "react";
import { QuizRecord } from "~/models/ChinguQuiz/QuizRecord";


export default function ResultView({quizRecord}: {quizRecord:QuizRecord[]}) {

    return (
        <ul>
        {quizRecord.map((record, i) => (
                <li key={record.correctAnswer.substring(0, 6)}>
                    <p>Question: {record.question} </p>
                    <p>Your Answer:{record.userAnswer}</p>
                    <p>Correct Answer:{record.correctAnswer}</p>
                </li>
            ))};
        </ul>
    )
};