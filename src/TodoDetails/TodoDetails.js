import React, { useEffect, useState } from 'react';
import { Badge, Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const TodoDetails = () => {
    const { todoId } = useParams();
    const [todo, setTodo] = useState({});
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTodo(data))
    }, []);
    const { id, title, completed } = todo;
    return (
        <div>
            <Card className="text-center">
                <Card.Header>
                    <Badge pill bg="primary">
                        ID: {id}
                    </Badge>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Title: {title}</Card.Title>
                    <Card.Text>
                        {completed ? <Badge bg="success">Task Completed</Badge> : <Badge bg="danger">Task Not Completed</Badge>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>

        </div>
    );
};

export default TodoDetails;