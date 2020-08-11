import React from "react";
import styles from "./AddTodo.module.scss";

const AddTodo = props => {
  return(
    <div className={styles.Add}>
      <input type="text" />
      <button>Add task</button>
    </div>
  )
}

export default AddTodo;