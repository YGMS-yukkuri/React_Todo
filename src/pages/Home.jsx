import React from 'react'
import Title from '../components/Title/Title'
import { Link } from 'react-router-dom'
import TaskCTRL from '../components/TaskCTRL/TaskCTRL'

export default function Home({ tasks, setTasks }) {
  return (
    <>
      <header>
        <Title />
      </header>
      <main>
        <div>
          {
            tasks.length ? (
              <h2>タスクは{tasks.length}件あります</h2>
            ) : (
              <h2>タスクはありません</h2>
            )
          }
        </div>
        <div>
          <TaskCTRL tasks={tasks} setTasks={setTasks} />
        </div>
      </main>
    </>
  )
}
