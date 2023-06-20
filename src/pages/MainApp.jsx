import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { Blog } from "./Blog"
import { Contact } from "./Contact"

export const MainApp = () => {
    return (
    <>
        <h1>MainApp</h1>
        <hr/>

        <Routes>
            <Route path="react-router/" element={<Home />}/>
            <Route path="react-router/about" element={<About />}/>
            <Route path="react-router/blog" element={<Blog />}/>
            <Route path="react-router/contact" element={<Contact />}/>
            <Route path="react-router/*" element={<Navigate to="/react-router/"/>}/>
        </Routes>
    </>
    )
}