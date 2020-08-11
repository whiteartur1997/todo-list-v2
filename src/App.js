import React from 'react';
import styles from './App.module.scss';
import TodoList from './Components/TodoList/TodoList';
import AddTodo from './Components/AddTodo/AddTodo';
import FilterTodo from './Components/FilterTodo/FilterTodo';
import TodoCounter from './Components/TodoCounter/TodoCounter';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: "Make todo", done: false },
        { id: 2, text: "Learn debugger", done: false },
        { id: 3, text: "Be the best", done: false },
      ]
    }
    this.toggleTask.bind(this);
  }
  
  toggleTask = (id) => {
    let tasks = [...this.state.tasks];
    this.setState(tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
    }))
  }

  render() {
    return (
      <div className={styles.App}>
        <h1>ToDo list</h1>
        <FilterTodo />
        <TodoList tasks={this.state.tasks} toggle={this.toggleTask} />
        <AddTodo />
        <TodoCounter />
      </div>
    );
  }
}

export default App;
