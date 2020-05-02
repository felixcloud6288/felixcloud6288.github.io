import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header(props){
    return(
        <Row>
            <Col>
                <h2>{props.page}</h2>
            </Col>
        </Row>
    )
}
export default Header;