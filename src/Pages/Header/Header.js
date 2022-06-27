import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from "../../images/logo2.png";
import   './Header.css';

const Header = () => {
    return (
        <div>
            
            <Navbar bg="light" variant="light">
                <Container>
                    <div  > <Navbar.Brand href="#home"><img className='logoImg' src={logo} alt=' ' />
                    </Navbar.Brand>
                    </div>

                    <div className='navbar'>
                        <Nav className="me-auto">
                        <Nav.Link href="#home">Cart</Nav.Link>
                        <Nav.Link href="#features">Login</Nav.Link>
                        <Button  className='btn'>Sign up</Button>
                    </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;