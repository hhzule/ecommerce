import React, { useState } from 'react'
import './Login.css'
import logo from '../images/logo.png'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase';

const Login = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        }).catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            // console.log(auth)
            if (auth) {
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src={logo} alt="loginlogo" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button className='login__signInButton' onClick={signIn} type='submit'>Sign In</button>

                </form>
                <p>
                    By signing-in you agree to the AMAZON terms & conditions of use & sale. Please see our Privacy Notice.
                </p>
                <button
                    onClick={register}
                    className='login__registerButton'>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
