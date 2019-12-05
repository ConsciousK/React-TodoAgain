
import React from 'react';
import "./Todo.css"
const Todo = props => {
  return (
    <div className="todoItem" onClick={() => props.todoCompleted(props.todo.id)} style={props.todo.completed ? { textDecoration: 'line-through' } : null}>
      {props.todo.task}
    </div>
  );
};

export default Todo;