import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>A motivated individual with in-depth knowledge of
                                languages and development tools, seeking a position
                                in a growth-oriented company where I can use my
                                skills to the advantage of the company while having
                                the scope to develop my own skills.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={4}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Bootsrap 5</li>
                                </Col>
                                <Col md={4}>
                                    <li>Node Js</li>
                                    <li>Express Js</li>
                                    <li>React Js</li>
                                    <li>Redux Js</li>
                                    <li>Next Js</li>
                                </Col>
                                <Col md={4}>
                                    <li>MongoDb Js</li>
                                    <li>MySql</li>
                                    <li>Firebase</li>
                                    <li>Git/Github</li>
                                    <li>Socket.io</li>
                                    <li>WebRtc</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage