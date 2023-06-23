import { Link, Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { Blog } from "./Blog"
import { Contact } from "./Contact"
import { Nav } from "./Nav"

export const MainApp = () => {
    return (
    <>
        <h1>MainApp</h1>
        <Nav/>
        <hr/>

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
    </>
    )
}