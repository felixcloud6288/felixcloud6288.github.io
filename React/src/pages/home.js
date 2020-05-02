import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from '../images/IMG_0053.JPG'
import Header from "../components/Header"


const Home= ()=>{
    return(
        <div>
            <Header page="About Me"/>
            <Row>
                <Col>
                    <img id="image" src={image} alt="Matthew Weston"/>
                    <p>My name is Matthew Weston. I'm currently studying Computer Science at the University of Central Florida.
                    My interests in the field primarily revolve around security, bug-testing, and performance. However I'm
                    also taking some time to learn web design as well. I'm proficient in C, knowledgeable in Java and am
                    starting to learn HTML, CSS, and JavaScript.</p>
                    <p>I began coding on a whim after a friend showed me what it was like and I'm happy to say I've greatly
                    enjoyed it. All the time and effort feel worth it when I run any code and it works. And it always feels
                    great to add to it or make it better.</p>
                    <p>At the moment, I work as a Supplemental Instructor at UCF. I'm part of a school-led program intended to
                    help other students excel in their classes. As an SI leader, I host review sessions, teach good study
                    practices, and help fellow students understand course material including good coding practices</p>
                    <ul>Known languages and skills
                    <li>C</li>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>Node.js</li>
                        <li>jquery</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SQL</li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}
export default Home;