import React, { Component } from 'react';
import {
    CardGroup,
    Card,
    CardImg,
    CardHeader,
    CardBody,
    CardText,
    CardFooter,
    Container,
    Col,
    Row,
    Button,
    Jumbotron
} from 'reactstrap';
import ReactMarkdown from 'react-markdown';

const items = require('./../projects.json');


const Cards = (props) => {
    return(
        <CardGroup>
            {items.map((e, i) => (
                <Card key={i} overflow="hidden">
                    <CardHeader>{e.name}</CardHeader>
                    <CardImg src={e.image} />
                    <CardBody>
                        <CardText>{e.short_description}</CardText>
                    </CardBody>
                    <CardFooter>
                        <Button onClick={()=>{props.moreInfoClick(i)}}>More Info</Button>
                    </CardFooter>
                </Card>
            ))}
        </CardGroup>
    )
}

const ProjectHighlight = (props) => {
    return(
        <Container>
            <Row>
                <Col>
                    <Button color="secondary" onClick={props.backClick}>All Projects</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Jumbotron>
                        <h1>{props.project.name}</h1>
                        <p>{props.project.description}</p>
                        <hr className="my-2" />
                        <p>{props.project.role}</p>
                        <hr className="my-2" />
                        <ReactMarkdown source={props.project.tech.join('\r\n')} />
                        <Button color="link" onClick={()=>{window.open(props.project.link)}}>link</Button>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            project: -1
        }
    }

    handleMoreInfoClick = (key) => {
        this.setState({project: key})
    }

    handleBackInfoClick = () => {
        this.setState({project: -1})
    }

    render() {
        return (
            <div>
                {this.state.project === -1 ?
                    (<Cards moreInfoClick={this.handleMoreInfoClick}/>) :
                    (<ProjectHighlight backClick={this.handleBackInfoClick} project={items[this.state.project]}/>)
                }
            </div>
        );
    }
}

export default Projects;
