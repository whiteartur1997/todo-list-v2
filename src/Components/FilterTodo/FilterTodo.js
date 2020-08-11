import React from "react";
import styles from "./FilterTodo.module.scss";

const FilterTodo = props => {
  return(
    <div className={styles.Filter}>
      <span>Filter your Todos</span>
      <input type="text" />
    </div>
  )
}

export default FilterTodo;