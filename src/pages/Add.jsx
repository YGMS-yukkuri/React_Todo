import styles from "./Add.module.css";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";


export default function Add({ tasks, setTasks }) {
  const navigate = useNavigate();
  const handleClick = async () => {
    const inputs = document.querySelectorAll('input')
    const newTask = {
      month: inputs[0].value,
      time: inputs[1].value,
      description: inputs[2].value
    }
    const docRef = await addDoc(collection(db, "tasks"), newTask);
    const id = docRef.id;

    setTasks([...tasks, { id, ...newTask }])
    localStorage.setItem("tasks", JSON.stringify([...tasks, { id, ...newTask }]))
    navigate("/")
  }
  return (
    <>
      <div>
        <div>
          <input className={styles.DInput} type="date" defaultValue={new Date().toISOString().split("T")[0]} />
          <input className={styles.DInput} type="time" />
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
