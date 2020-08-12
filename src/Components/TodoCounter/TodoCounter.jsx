import React from "react";
import styles from "./TodoCounter.module.scss";


const TodoCounter = props => {
  const countDone = () => {
    let done = 0;
    for(let task of props.tasks) {
      if(task.done) done++;
    }
    return done;
  }
  return(
    <div className={styles.Counter}>
      <div>All tasks: {props.tasks.length}</div>
      <div>Done: {countDone()}</div>
      <div>Should be done: {props.tasks.length - countDone()}</div>
    </div>
  )
}

export default TodoCounter;