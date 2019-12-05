import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ''
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  changeTodo = event => this.setState({ [event.target.name]: event.target.value });

  addTodoHandler = event => {
    event.preventDefault();
    if (this.state.todo === '' ) {
      return alert('Must Input a Todo Task in the Input field.');
    } else {
      const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
      this.setState({ 
        todos: [...this.state.todos, newTodo], 
        todo: '' 
      });
    }
  };

  clearTodos = event => {
    event.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  todoCompleted = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });

    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} todoCompleted={this.todoCompleted}/>
        <TodoForm value={this.state.todo} addTodo={this.addTodoHandler} todoChange={this.changeTodo} clearTodos={this.clearTodos} />
      </div>
    );
  }
}

export default App;
