import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/landing"
import Investigation from "./pages/investigation"
import './index.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Investigation />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
