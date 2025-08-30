import "./app.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Add from "./pages/Add"
import Delete from "./pages/Delete"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
