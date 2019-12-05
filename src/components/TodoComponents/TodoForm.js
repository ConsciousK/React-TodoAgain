  
import React from 'react';
import './Todo.css'
const TodoForm = props => {
  return (
    <form className="todoFormContainer">
      <input className="todoInput"
        onChange={props.todoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Type Your Todo Here..."
      />
      <button className="todoButton" onClick={props.addTodo}>Add Todo</button>
      <button className="todoButton" onClick={props.clearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;