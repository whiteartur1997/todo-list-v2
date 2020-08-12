import React from "react";
import styles from "./TodoItem.module.scss";

const TodoItem = props => {
  let classList = [styles.Item];
  let button = null;
  if(props.done) {
    button = <button onClick={e => {
      e.stopPropagation();
      props.openModal(props.id, props.text);
    }}>Delete</button>
    classList.push(styles.done);
  }
  if(props.hidden) {
    classList.push(styles.hidden);
  }
  return(
    <li id={props.id} onClick={(e) => props.toggle(props.id)} className={classList.join(" ")}>
      <span>{props.text}</span>
      {button}
    </li>
  )
}

export default TodoItem;