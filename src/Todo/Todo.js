import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { CardGroup, Container, ProgressBar, Spinner } from 'react-bootstrap';
import SingleTodo from '../SingleTodo/SingleTodo';
import '../Todo/Todo.css';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data));
    }, [])
    return (
        <Container >
            <div className="text-center mx-auto">
                {(!!todos.length) || <Spinner animation="border" variant="success" />}
            </div>
            <h1>Todo List: {todos.length}</h1>
            <CardGroup className="todo">
                {todos.map((todo, inx) => <SingleTodo
                    key={inx}
                    todo={todo}
                ></SingleTodo>)}
            </CardGroup>
        </Container>
    );
};

export default Todo;