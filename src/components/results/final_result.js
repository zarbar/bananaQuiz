import React from 'react';
import { Button, Image } from 'react-bootstrap';
import '../questions/questions.css';
import split from './bananasplit.jpg';
import bread from './bananabread.jpg';
import peel from './bananapeel.jpg';
import regular from './banana.jpg';


export default function Result({ answerArray }) {
    const [answer, setAnswer] = React.useState({ h3: '', src: '' });

    React.useEffect(() => {
        let splitCount = { counter: 0, h3: 'Split Banana', src: split };
        let breadCount = { counter: 0, h3: 'Banana Bread', src: bread };
        let peelCount = { counter: 0, h3: 'Banana Peel', src: peel };
        let regularCount = { counter: 0, h3: 'Regular Banana', src: regular };

        if (answerArray) {
            answerArray.map((answer) => {
                return answer === 'split' ?
                    splitCount.counter += 1 :
                    answer === 'bread' ?
                        breadCount.counter += 1 :
                        answer === 'peel' ?
                            peelCount.counter += 1 :
                            regularCount.counter += 1;
            });
            setAnswer([splitCount, breadCount, peelCount, regularCount].sort((a, b) => {
                return b.counter - a.counter;
            })[0]);
        }
    }, [answerArray])

    return (
        <main className="backBlue">
            <div className='yellowBox'>
                <h4>You are a...</h4>
                <h3>{answer.h3}</h3>
                <Image src={answer.src} className="image" rounded />
                <Button variant="dark" onClick={() => { window.location.replace('questions') }}>Try again?</Button>
            </div>
        </main >

    )
}