import style from "./Header.module.scss"
import { Nav } from "../Navigation/Nav"
import { BiFootball } from "react-icons/bi"
import { NavLink } from 'react-router-dom'

// Header med navigation bar ind i
export const Header = () => {

    return (
        <header className={style.header}>
            <h3><NavLink to='/'>GooooolBloggen<span><BiFootball/></span></NavLink></h3>    
            <Nav/>
        </header>
    )
}