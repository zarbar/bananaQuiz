import React from 'react';
import { Button, Image } from 'react-bootstrap';
import '../questions/questions.css';
import split from './bananasplit.jpg';
import bread from './bananabread.jpg';
import peel from './bananapeel.jpg';
import regular from './banana.jpg';


function Result({ answerArray }) {

    let result = (answerArray) => {
        let splitCount = 0;
        let breadCount = 0;
        let peelCount = 0;
        let regularCount = 0;
    
        return 'Regular Banana';
    };

    return (
        <main className="backBlue">
            <div className='yellowBox'>
                <h4>You are a...</h4>
                <h3>{result}</h3>
                <Image src={regular} className="image" rounded />
                <Button variant="dark">Try again?</Button>
            </div>
        </main>

    )
}

export default Result;