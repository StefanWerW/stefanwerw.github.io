import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap';
import Projects from './components/Projects'

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar expand="md">
                    <NavbarBrand href="/">SCAW DEV</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/cv/">Resumé</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/StefanWerW">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Container>
                    <Row>
                        <Col>
                            <h1 className="display-1 text-center">SCAW.dev Projects</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Projects />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
