import "./app.css"
import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Add from "./pages/Add"
import Delete from "./pages/Delete"

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
          <Route path="/add" element={<Add tasks={tasks} setTasks={setTasks} />} />
          <Route path="/delete" element={<Delete tasks={tasks} setTasks={setTasks} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
