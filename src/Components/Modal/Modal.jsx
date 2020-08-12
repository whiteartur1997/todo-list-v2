import React from "react";
import styles from "./Modal.module.scss";

const Modal = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return (
    <div className={styles.modalBase}>
      <div>
        <h3>Do you want to delete task "{props.name}"</h3>
        <div>
          <button className={styles.deleteBtn} onClick={() => props.remove(props.id)}>Delete</button>
          <button className={styles.cancelBtn} onClick={() => props.cancel()}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;