import React from 'react';
import styles from './App.module.scss';
import TodoList from './Components/TodoList/TodoList';
import AddTodo from './Components/AddTodo/AddTodo';
import FilterTodo from './Components/FilterTodo/FilterTodo';
import TodoCounter from './Components/TodoCounter/TodoCounter';
import Modal from './Components/Modal/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: "Make todo", done: false },
        { id: 2, text: "Learn debugger", done: false },
        { id: 3, text: "Be the best", done: false },
      ],
      modal: {
        isOpen: false
      }
    }
  }

  toggleTask = (id) => {
    let tasks = [...this.state.tasks];
    this.setState({
      tasks: tasks.map(task => {
        if (task.id === id) {
          task.done = !task.done;
        }
        return task;
      })
    })
  }

  filterTasks = text => {
    console.log(text);
    let tasks = [...this.state.tasks];
    let mappedTasks = tasks.map(task => {
      if (task.text.toLowerCase().indexOf(text.toLowerCase()) === -1) {
        return {
          ...task,
          isHidden: true
        }
      } else {
        return {
          ...task,
          isHidden: false
        }
      }
    })
    this.setState({ tasks: mappedTasks })
  }

  addTask = (text) => {
    let task = {
      id: Date.now(),
      text,
      done: false
    }
    let tasks = [...this.state.tasks];
    tasks.push(task);
    this.setState({tasks: tasks})
  }

  removeTask = (id) => {
    let tasks = [...this.state.tasks];
    this.setState({
      tasks: tasks.filter(task => {
        return task.id !== id;
      })
    });
    let newModal = {
      ...this.state.modal,
      isOpen: !this.state.modal.isOpen
    };
    this.setState({
      modal: newModal
    })
  }

  openModal = (id, name) => {
    let newModal = {
      isOpen: !this.state.modal.isOpen,
      id,
      name
    }
    this.setState({ modal: newModal });   
  }

  closeModal = () => {
    let newModal = {
      ...this.state.modal,
      isOpen: !this.state.modal.isOpen
    };
    this.setState({modal: newModal});
  }

  render() {
    return (
      <div className={styles.App}>
      <Modal 
        isOpen={this.state.modal.isOpen}
        name={this.state.modal.name}
        id={this.state.modal.id}
        remove={this.removeTask}
        cancel={this.closeModal}
      />
        <h1>ToDo list</h1>
        {this.state.tasks.length ? <FilterTodo filter={this.filterTasks} tasks={this.state.tasks}/> : null}
        <TodoList 
          tasks={this.state.tasks} 
          toggle={this.toggleTask}
          openModal={this.openModal}
        />
        <AddTodo add={this.addTask}/>
        <TodoCounter tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
