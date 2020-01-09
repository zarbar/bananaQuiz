import React from 'react';
import '../questions/questions.css';

export default function Sure(props) {
    const showResults = () => {
        props.showResults();
    }

    return (
        <div className="backBlue">
            <div className='yellowBox'>
                <span id='resultReady'>
                    <h1>Ready for your result?</h1>
                </span>
                <div className='sillyShake animated wobble'>
                    <button id='readyButton'
                        onClick={() => showResults()}>
                        Yes!
                    </button>
                </div>
            </div >
        </div >
    )
}