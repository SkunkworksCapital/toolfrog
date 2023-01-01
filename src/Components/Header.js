import React from 'react';
import Container from 'react-bootstrap/Container';
import logo from '../Images/toolfrogLogo.png';
import '../App.css';
/*
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
*/

class Header extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            foo: true
        }
    }

    render () {
         return (
            <Container className="headerstyle">
                <img src={logo} className="App-logo " alt="logo" />
                 <h1 style={{color: "white"}}>ToolFrog</h1>
             </Container>
         );
    }
}

export default Header;