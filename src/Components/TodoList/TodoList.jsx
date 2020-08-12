import React from "react";
import styles from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";
const TodoList = props => {
  let emptyWarning = null;
  if(props.tasks.length === 0) {
    emptyWarning = <h1>No tasks now. Add something</h1>
  } 
  return (
    <div>
      {emptyWarning || <ul className={styles.List}>
        {props.tasks.map(task => {
          return <TodoItem
            id={task.id}
            key={task.id}
            text={task.text}
            done={task.done}
            hidden={task.isHidden}
            toggle={props.toggle}
            openModal={props.openModal}
          />
        })}
      </ul>}
      
    </div>
  )
}

export default TodoList;