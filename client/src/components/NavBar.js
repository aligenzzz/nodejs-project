import React, { useContext } from "react"
import { Context } from "../index"
import '../site.css'
import { observer } from "mobx-react-lite"
import { NavLink } from "react-router-dom"
import { ADMIN_ROUTE, HOME_ROUTE, LIST_ROUTE, LOGIN_ROUTE } from "../utils/consts"

const NavBar = observer(() => {
    const {user} = useContext(Context)

    const logout = () => {
        user.setUser(null);
        user.setIsAuth(false);
    }

    return (
        <nav className="navbar">
            <NavLink to={HOME_ROUTE} className="navlink">Home</NavLink>
            <NavLink to={LIST_ROUTE} className="navlink">List</NavLink>
            {user.isAuth ? 
                <>
                    <NavLink to={ADMIN_ROUTE} className="navlink">Admin</NavLink>
                    <NavLink className="navlink" onClick={logout}>Logout</NavLink>
                </>
             :
                <NavLink to={LOGIN_ROUTE} className="navlink">Login</NavLink>
            }      
        </nav>
    )
})

export default NavBar