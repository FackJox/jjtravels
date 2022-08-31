import React, { useState } from 'react'
import axios from "axios"

import { setAuthToken } from '../helpers/setAuthToken'
// import Google from "../img/google.png"
// import Facebook from "../img/facebook.png"
// import Github from "../img/github.png"
const API_URL = process.env.REACT_APP_API_URL

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const onSubmit = e => {
        e.preventDefault()
        console.log("onsubmit called")

        const userData = {
            email,
            password
        }
        console.log("user data" + JSON.stringify(userData))
        axios
            .post(`${API_URL}/users/login`, userData)
            .then(res => {
                const token = res.data.token

                localStorage.setItem("token", token)

                setAuthToken(token)

                window.location.href = '/'


            })
            .catch(err => {
                console.log(err.response)
            })
    }


    // const google = () => {
    //     window.open("http://localhost:5000/auth/google", "_self")
    // }

    // const github = () => {
    //     window.open("http://localhost:5000/auth/github", "_self")
    // }

    // const facebook = () => {
    //     window.open("http://localhost:5000/auth/facebook", "_self")
    // }


    return (
        <div className="login">
            <h1 className="loginTitle">Login</h1>
            <div className="wrapper">
                {/* <div className="left">
                <div className='loginButton google' onClick={google}>
                    <img src={Google} alt="" className="icon" />
                    Google
                </div>
                <div className='loginButton facebook' onClick={facebook}>
                    <img src={Facebook} alt="" className="icon" />
                    Facebook
                </div>
                <div className='loginButton github' onClick={github}>
                    <img src={Github} alt="" className="icon" />
                    Github
                </div>
            </div>
            <div className='center'>
                <div className='line'>
                    <div className="or">OR</div>
                </div>
            </div> */}
                <div className="right">
                    <form onSubmit={onSubmit}>
                        <input type="email" placeholder='Enter Email' onChange={e => { setEmail(e.target.value); }} required />
                        <input type="password" placeholder='Enter Password' onChange={e => { setPassword(e.target.value) }} required />
                        <input type="submit" value="Login" name="login" />
                    </form>
                </div>
                <div>

                    <a href="/signup">Signup here!</a>

                </div>
            </div>
        </div>
    )
}


export default Login
