import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreateBlog from "./pages/CreateBlog"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/createblog" element={<CreateBlog/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}