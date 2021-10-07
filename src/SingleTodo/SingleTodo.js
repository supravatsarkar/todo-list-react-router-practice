import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Badge, Card, Placeholder } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleTodo = (props) => {
    const { id, title, completed } = props.todo;
    return (
        <Card className="card h-100">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <h5>ID: {id}</h5>
                {completed ? <Badge bg="success">Completed</Badge> : <Badge bg="danger">Not Completed</Badge>}
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>

                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>


                <Card.Footer className="text-muted border-0 bg-white text-center">
                    <Link to={`/todos/${id}`}>
                        <button className="btn btn-outline-dark">View Task</button>
                    </Link>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
};

export default SingleTodo;