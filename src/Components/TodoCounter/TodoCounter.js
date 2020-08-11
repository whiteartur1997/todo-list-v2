import React from "react";

const TodoCounter = props => {
  return(
    <div>
      <div>All: ${props.length}</div>
      <div>Done: ${props.done}</div>
      <div>Should be done: ${props.done}</div>
    </div>
  )
}

export default TodoCounter;