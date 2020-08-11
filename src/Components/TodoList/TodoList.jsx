import React from "react";
import styles from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";
const TodoList = props => {
  return(
    <ul className={styles.List}>
      {props.tasks.map(task => {
        return <TodoItem
          id={task.id} 
          key={task.id} 
          text={task.text}
          done={task.done}
          toggle={props.toggle}
        />
      })}    
    </ul>
  )
}

export default TodoList;