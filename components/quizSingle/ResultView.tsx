import { useEffect, useState } from "react";

interface quizRecord {
    correctAnswer : string,
    userAnswer: string,
    question: string,
    correct: boolean,
  }

export default function ResultView({quizRecord}: {quizRecord:quizRecord[]}) {

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