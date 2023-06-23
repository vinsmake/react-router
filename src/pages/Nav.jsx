import { Link, NavLink } from "react-router-dom"
import "./nav.css";

export const Nav = () => {
    return (
    <>
        <NavLink className={({isActive}) => `${isActive ? 'warning-box' : ''}` } to="/">Home</NavLink>
        <NavLink className={({isActive}) => `${isActive ? 'warning-box' : ''}` } to="/about">About</NavLink>
        <NavLink className={({isActive}) => `${isActive ? 'warning-box' : ''}` } to="/blog">Blog</NavLink>
        <NavLink className={({isActive}) => `${isActive ? 'warning-box' : ''}` } to="/contact">Contact</NavLink>
    </>
    )
}