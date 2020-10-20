import React from 'react'
import './Login.css'
import logo from '../images/logo.png'
import { Link } from '@material-ui/core'

const Login = () => {
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src={logo} alt="loginlogo" />
            </Link>

        </div>
    )
}

export default Login
