import "./app.css"
import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Home from "./pages/Home"
import Add from "./pages/Add"
import Delete from "./pages/Delete"

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

    useEffect(() => {
    async function fetchTasks() {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      const fetchedTasks = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));
      setTasks(fetchedTasks);
      localStorage.setItem("tasks", JSON.stringify(fetchedTasks));
    }
    fetchTasks();
  }, []);

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
