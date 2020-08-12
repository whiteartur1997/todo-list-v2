import React from "react";
import styles from "./FilterTodo.module.scss";

const FilterTodo = props => {
  let countDone = () => {
    let count = 0;
    props.tasks.forEach(task => {
      if(task.isHidden === true) count++;
    })
    return count;
  }
  let filterWarning = "Filter your todos";
  if(countDone() === props.tasks.length) filterWarning = "Nothing found with your filter";

  let filterValue = React.createRef();
  return( 
      <div className={styles.Filter}>
        <span style={{ color: (countDone() === props.tasks.length) ? "red" : "black" }}>{filterWarning}</span>
        <input
          type="text"
          ref={filterValue}
          onKeyUp={() => {
            props.filter(filterValue.current.value);
          }}
        />
      </div>   
  )
}

export default FilterTodo;