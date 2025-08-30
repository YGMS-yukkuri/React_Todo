import React from 'react';
import styles from "./Add.module.css";

export default function Add({ tasks, setTasks }) {
  const handleClick = () => {
    const input = document.querySelector('input')
    const newTask = input.value
    if (newTask) {
      setTasks([...tasks, newTask])
      input.value = ''
    }
  }
  return (
    <>
      <div>
        <div>
          <input className={styles.DInput} type="month" />
          <input className={styles.DInput} type="time"/>
          <input className={styles.VInput} />
        </div>
          <button className={styles.button} onClick={() => handleClick}>タスクを追加</button>
      </div>
    </>
  )
}
