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
import P5Wrapper from 'react-p5-wrapper';
import Projects from './components/Projects';
import BackgroundSketch from './sketches/BackgroundSketch';
import { LandingPage } from './pages'
import ReactFullpage from '@fullpage/react-fullpage';

const canvasStyle = {
    position: 'fixed',
    top: '0px',
    left: '0px',
    zIndex: '-1'
}

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
                <ReactFullpage
                    render={({ state, fullpageApi}) => {
                        return(
                            <div>
                                <div className="section">
                                    <LandingPage />
                                </div>

                                <div className="section">
                                    <Container>
                                        <Row>
                                            <Col>
                                                <Projects />
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        );
                    }}
                />

                <div style={canvasStyle}>
                    <P5Wrapper sketch={BackgroundSketch} />
                </div>
            </div>
        );
    }
}

export default App;
