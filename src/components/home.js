import React from 'react';
import { Link } from 'react-router-dom';
import './BackgroundImagePage.css';
import { Button } from 'react-bootstrap';

export default function Home() {
    return (
        <>
            <div className="bg">
                <div className="whatBanana">
                    <h1>What type of banana are you?</h1>
                </div>
                <div className="startButton">
                    <Link to="/questions" className="start">
                        <Button className="startBut" variant="dark">
                            Start Quiz
                    </Button>
                    </Link>
                </div>
            </div >
        </>
    )
}