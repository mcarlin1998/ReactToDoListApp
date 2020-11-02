import React from 'react';
import Todo from './Todo';

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
  return(
    <div class="todo-container">
      <ul class="todo-list">
      {filteredTodos.map(todo => (
        <Todo
        setTodos={setTodos}
        todos={todos}
        key={todo.id}
        todo={todo}
        text={todo.text}/>
      ))};
      </ul>
    </div>
  );
};

export default ToDoList;
