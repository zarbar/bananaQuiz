import React, { useEffect, useState } from 'react';
import './questions.css';
import Sure from '../results/sure';
import Result from '../results/final_result';
import questionList from './questionlist';


export default function Questions() {

    const [current_question, setCurrent_question] = useState(questionList()[0]);
    const [user_answers, setUser_answers] = useState([]);
    const [show_sure_page, setSure] = useState(false);
    const [show_final_result, setResults] = useState(false);

    useEffect(() => {
        console.log(user_answers);
    })

    // if (this.state.show_sure_page) {
    //     return <Sure goToResult={goToResult} />;
    // }
    // if (this.state.show_final_result) {
    //     return <Result workoutFinalResult={workoutFinalResult} />;
    // }


    return (

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