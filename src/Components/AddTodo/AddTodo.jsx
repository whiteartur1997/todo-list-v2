import React from "react";
import styles from "./AddTodo.module.scss";

const AddTodo = props => {
  let inputValue = React.createRef();
  return(
    <div className={styles.Add}>
      <input type="text" ref={inputValue} />
      <button onClick={() => {
        if(inputValue.current.value.length > 0) {
          props.add(inputValue.current.value);
        inputValue.current.value = "";
        }
      }}>Add task</button>
    </div>
  )
}

export default AddTodo;