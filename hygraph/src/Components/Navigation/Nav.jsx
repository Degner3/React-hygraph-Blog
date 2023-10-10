import style from "./Nav.module.scss"
import { NavLink } from 'react-router-dom'
import { BiFootball } from "react-icons/bi"

// Navigation bar
export const Nav = () => {

  const navArray = [
    { Link: "/", page: "Home" },
    { Link: "/blogs", page: "Blog" },
    // { Link: "/", page: BiFootball },
  ];


  
    return (
      <nav className={style.nav}>
        <ul>
          {navArray.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.Link}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#226CE0" : "#000000",
                    };
                  }}
                >
                  {item.page}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );

}