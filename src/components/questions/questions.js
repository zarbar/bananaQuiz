import React, { useEffect, useState } from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import './questions.css';
import Sure from '../results/sure';
import Result from '../results/final_result';
import questionList from './questionlist';


export default function Questions() {

    const [current_question, setCurrent_question] = useState(questionList()[0]);
    const [user_answer, setUser_answer] = useState([]);
    const [show_sure_page, setSure] = useState(false);
    const [show_final_result, setResults] = useState(false);


    //increase nextQuestion number if under 7, if over 7 activate show_sure_page
    // let nextQuestion = (answer) => {
    //     const { current_question } = this.state;
    //     if (current_question === 7) {
    //         this.setState({
    //             show_sure_page: true
    //         });
    //     } else {
    //         this.setState({ current_question: current_question + 1 });
    //     };
    // };


    //pushes answer type to user_answers array
    // let pushAnswer = (answerKey) => {
    //         this.setState({
    //         user_answers: [...this.state.user_answers, answerKey]
    //     });
    // };

    // let workoutFinalResult = () => {
    //     const { modeAnswer } = this.state;
    //     const { modeArray } = this.state;
    //     this.setState({ modeAnswer: modeArray[0] });
    //     console.log(modeAnswer)
    // }

    // let goToResult = () => {
    //     this.setState({ show_sure_page: false, show_final_result: true })
    // }

    // let workoutResult = (ary) => {
    //     var counter = {};
    //     var mode = [];
    //     var max = 0;
    //     for (var i in ary) {
    //         if (!(ary[i] in counter))
    //             counter[ary[i]] = 0;
    //         counter[ary[i]]++;

    //         if (counter[ary[i]] === max)
    //             mode.push(ary[i]);
    //         else if (counter[ary[i]] > max) {
    //             max = counter[ary[i]];
    //             mode = [ary[i]];
    //         }
    //     }
    // }

    // if (this.state.show_sure_page) {
    //     return <Sure goToResult={goToResult} />;
    // }
    // if (this.state.show_final_result) {
    //     return <Result workoutFinalResult={workoutFinalResult} />;
    // }

    return (

        //Background image
        <div className="backBlue" >

            {/* Yellow box */}
            < Container >
                <Card className="text-center cardBox" border="light">
                    <Card.Body style={{
                        backgroundColor: '#FAE700', color: 'black', fontFamily: 'Ribeye Marrow',
                        fontStyle: 'normal', fontSize: '60px', lineHeight: '74px'
                    }}>

                        {/* Question number */}
                        <Container>
                            <span className="underline">{current_question.question_num}</span>
                        </Container>
                        {/* 
                            Question */}
                        <Card.Text><span className="questionFont">{current_question.question_title}</span>
                        </Card.Text>

                        {/* option 1 */}
                        <Container>
                            <Button variant="outline" className="butOff" onClick={() => {
                                pushAnswer(current_question.answer_key[0]);
                                nextQuestion(current_question.answers[0]);
                                workoutResult(this.state.user_answers);
                                workoutFinalResult();
                            }}>
                                {current_question.answers[0]}

                            </Button>
                        </Container>

                        {/* option 2 */}
                        <Container>
                            <Button variant="outline-*" className="butOff" onClick={() => {
                                pushAnswer(current_question.answer_key[1]);
                                nextQuestion(current_question.answers[1]);
                                workoutResult(this.state.user_answers);
                                workoutFinalResult();
                            }} >{current_question.answers[1]}</Button>
                        </Container>

                        {/* option 3 */}
                        <Container>
                            <Button variant="outline-*" className="butOff" onClick={() => {
                                pushAnswer(current_question.answer_key[2]);
                                nextQuestion(current_question.answers[2]);
                                workoutResult(this.state.user_answers)
                            }}>{current_question.answers[2]}</Button>
                        </Container>

                        {/* option 4 */}
                        <Container>
                            <Button variant="outline-*" className="butOff" onClick={() => {
                                pushAnswer(current_question.answer_key[3]);
                                nextQuestion(current_question.answers[3]);
                                workoutResult(this.state.user_answers)
                            }}>{current_question.answers[3]}</Button>
                        </Container>


                    </Card.Body>
                </Card >
            </Container >
        </div>
    )
}