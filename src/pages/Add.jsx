import styles from "./Add.module.css";
import { useNavigate } from "react-router-dom";


export default function Add({ tasks, setTasks }) {
  const navigate = useNavigate();
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
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleClick}>タスクを追加</button>
          <button className={styles.button} onClick={() => navigate("/")}>キャンセル</button>
        </div>
      </div>
    </>
  )
}
