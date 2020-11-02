import React, { useState,useEffect } from 'react';
import './App.css';
//install components
import Form from './components/form'
import ToDoList from './components/todolist'


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Run Once When App Starts
  useEffect(() => {
    getLocalTodos();
  }, []);
  //use useEffect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  //function
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //Save Local

const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
const getLocalTodos = () => {
  if (localStorage.getItem("todos") === null) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
  }
};
  return (
    <div className="App">
    <header>
    <h1>Michaels ToDo List</h1>
    </header>
    <Form
    inputText={inputText}
    todos={todos}
    setTodos={setTodos}
    setInputText={setInputText}
    setStatus={setStatus}
    filteredTodos={filteredTodos}
    />
    <ToDoList
    filteredTodos={filteredTodos}
    setTodos={setTodos}
    todos={todos}/>
  </div>
  );
}

export default App;
