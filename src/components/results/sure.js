import React from 'react';
//import { withRouter, Link } from 'react-router-dom';
import { Button, Container, Card } from 'react-bootstrap';
import '../questions/questions.css';


export default function Sure({ showFinalResult }) {


    return (

        //Background image
        <div className="backBlue">

            {/* Yellow box */}
            <Container>
                <Card className="text-center cardBox" border="light">
                    <Card.Body style={{
                        backgroundColor: '#FAE700', color: 'black', fontFamily: 'Ribeye Marrow',
                        fontStyle: 'normal', fontSize: '60px',

                    }}>

                        {/* Question number */}
                        <Container className="ready">
                            <span>Ready for your result?</span>
                            <Container>
                                <div><Button variant="dark" className="bigButton" onClick={showFinalResult}>Yes!</Button></div>
                            </Container>
                        </Container>

                    </Card.Body>
                </Card>
            </Container>
        </div >

    )
}