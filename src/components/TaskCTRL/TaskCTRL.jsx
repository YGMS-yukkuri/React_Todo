import React from 'react'
import styles from './TaskCTRL.module.css'
import { Link, Links } from 'react-router-dom'

export default function TaskCTRL({ tasks, setTasks }) {
    return (
        <div className={styles.TaskCTRL}>
            <Link to="/add"><span className={styles.TaskLink}>Add Task</span></Link>
            <Link to="/delete"><span className={styles.TaskLink}>Delete Task</span></Link>
        </div>
    )
}
