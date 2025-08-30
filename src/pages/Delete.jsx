import React from 'react'
import styles from "./Add.module.css";
import { useNavigate } from "react-router-dom";

export default function Delete({ tasks, setTasks }) {
  const navigate = useNavigate();

  return (
    <>
      <h3>削除するタスクを選択してください</h3>
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <span>{task.month} {task.time} 「{task.description}」</span>

            <button onClick={() => {
              const newTasks = tasks.filter((_, i) => i !== index);
              setTasks(newTasks);
              localStorage.setItem("tasks", JSON.stringify(newTasks));
            }}>削除</button>

          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => navigate("/")}>戻る</button>
      </div>
    </>
  )
}
