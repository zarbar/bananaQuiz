import React, { useEffect, useState } from 'react';
import './questions.css';
import Sure from '../results/sure';
import Result from '../results/final_result';
import questionList from './questionlist';


export default function Questions() {

    const [questionNum, setQuestionNum] = useState(0);
    const [current_question, setCurrent_question] = useState(questionList()[questionNum]);
    const [user_answers, setUser_answers] = useState([]);
    const [sure, setSure] = useState(false);
    const [show_final_result, setResults] = useState(false);

    useEffect(() => {
        console.log(user_answers);
        console.log('questionNum: ' + questionNum)
    })

    const nextQuestion = () => {
        if (questionNum < 7) {
            setQuestionNum(questionNum + 1);
        }
        else {
            setSure(true);
        }
    }

    useEffect(() => {
        setCurrent_question(questionList()[questionNum]);
    }, [questionNum])

    const showFinalResult = () => {
        setResults(true);
        setSure(false);
    }

    if (sure) {
        return <Sure results={showFinalResult} />;
    }

    else if (show_final_result) {
        return <Result />;
    }

    else return (

        //Background image
        <main className="backBlue" >

            {/* Yellow box */}
            < div className='yellowBox'>

                {/* Question number */}
                <h2>{current_question.question_num}</h2>

                {/* Question */}
                <h3 className="questionFont">{current_question.question_title}</h3>

                {/* options */}
                {current_question.options.map((optionItem, index) => {
                    const answer = optionItem.answer;
                    return (
                        <div key={index}>
                            <button
                                onClick={() => {
                                    let currentAnswers = user_answers;
                                    setUser_answers([...currentAnswers, answer]);
                                    nextQuestion();
                                }}
                                className='buttonPadding'>
                                <h1>{optionItem.option}</h1>
                            </button>
                        </div>
                    )
                })}
            </div >
        </main>
    )
}