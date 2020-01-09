import React from 'react';
import { Link } from 'react-router-dom';
import './BackgroundImagePage.css';
import { Button } from 'react-bootstrap';

export default function Home() {
    return (
        <>
            <div className="bg">
                <div className="whatBanana">
                    <h5 className='animated fadeInUpBig delay-1s myAnimation'>What type of banana are you?</h5>
                </div>
                <div className="myButtonAnimation">
                    <Link to="/questions">
                        <Button className="startBut" variant="dark">
                            Start Quiz
                    </Button>
                    </Link>
                </div>
            </div >
        </>
    )
}