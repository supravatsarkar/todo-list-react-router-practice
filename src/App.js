import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Todo from './Todo/Todo';
import Header from './Header/Header';
import NotFound from './NotFound/NotFound';
import TodoDetails from './TodoDetails/TodoDetails';



function App() {

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/todo">
            <Todo></Todo>
          </Route>
          <Route path="/todos/:todoId">
            <TodoDetails></TodoDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
