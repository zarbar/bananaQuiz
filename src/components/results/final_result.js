import React from 'react';
// import { withRouter } from 'react-router-dom';
import { Button, Container, Card, Image } from 'react-bootstrap';
import '../questions/questions.css';
import bananasplit from './bananasplit.jpg';


function Result({ workoutFinalResult }) {

    let poopPatrol = () => {
        workoutFinalResult();
    };

    poopPatrol();

    return (
        //Background image
        <div className="backBlue">

            {/* Yellow box */}
            <Container>
                <Card className="text-center cardBox" border="light">
                    <Card.Body style={{
                        backgroundColor: '#FAE700', color: 'black', fontFamily: 'Ribeye Marrow',
                        fontStyle: 'normal', fontSize: '60px', lineHeight: '74px'
                    }}>

                        {/* Question number */}
                        <Container className="ready">
                            <span><h4>You are a...</h4></span>
                            <Container>
                                <Container>
                                    <span><h3>Final Result</h3></span>
                                    <Container>

                                        <Image src={bananasplit} className="image" rounded />
                                    </Container>
                                </Container>
                                <div><Button variant="dark">Try again?</Button></div>
                            </Container>
                        </Container>

                    </Card.Body>
                </Card>
            </Container>
        </div >

    )
}

export default Result;