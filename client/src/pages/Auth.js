import React, { useContext, useState } from 'react'
import '../site.css'
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userApi'
import { observer } from 'mobx-react-lite'
import { Context } from "../index"

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()

    if (user.isAuth) {
        history(HOME_ROUTE)
    }

    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(username, password)
            } else {
                data = await registration(username, email, password)
            }   
            
            user.setUser(data)
            user.setIsAuth(true)
            history(HOME_ROUTE)
        } catch (e) {
            console.log(e.response.data.message)
        }    
    }

    return (
        <div align="center" style={{paddingTop: 100}}>
            {isLogin ?
                <form>
                    <input type='text' placeholder='Username' 
                           value={username} onChange={e => setUsername(e.target.value)}>
                    </input>
                    <input type='password' placeholder='Password'
                           value={password} onChange={e => setPassword(e.target.value)}>
                    </input>
                    <button onClick={click}>Login</button>
                    <br></br>
                    <NavLink to={REGISTRATION_ROUTE} className="simpleLink">Registrate</NavLink>
                </form>
                :
                <form>
                    <input type='text' placeholder='Username'
                           value={username} onChange={e => setUsername(e.target.value)}>
                    </input>
                    <input type='email' placeholder='Email'
                           value={email} onChange={e => setEmail(e.target.value)}>
                    </input>
                    <input type='password' placeholder='Password'
                           value={password} onChange={e => setPassword(e.target.value)}>
                    </input>
                    <button onClick={click}>Registrate</button>
                    <br></br>
                    <NavLink to={LOGIN_ROUTE} className="simpleLink">Login</NavLink>
                </form>
            }    
        </div>
    )
})

export default Auth