import { useEffect, useState } from "react";

export default function ResultView(quizRecord:QuizRecordType) {
    const [recordElements, setRecordElements] = useState([]);

    useEffect(() => {
        let elements = [];
        for (let [key, value] of quizRecord) {
            elements.push(<div>
                {key} is {value}
            </div>)
        }
        setRecordElements(elements);
    }, [quizRecord])

    return (
        <section>
            {recordElements}
        </section>
    )
};