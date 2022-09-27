import { useState, FormEventHandler, FormEvent } from 'react'
import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("")


    const onSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const userData = {
            email,
            password,
        }
        if (password !== verifyPassword) {
            return ("error: passwords done match")
        } else {

            axios
                .post(`${API_URL}/users/signup`, userData)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err.response)
                })
        }
    }
    return (
        <div className="register">
            <h1 className="registerTitle">Register</h1>

            <div className="right">
                <form onSubmit={onSubmit}>
                    <input type="email" placeholder='Enter Email' onChange={e => { setEmail(e.target.value) }} required />
                    <input type="password" placeholder='Enter Password' onChange={e => { setPassword(e.target.value) }} required />
                    <input type="password" placeholder='Verify Password' onChange={e => { setVerifyPassword(e.target.value) }} required />
                    <input type="submit" value="Register" name="register" />
                </form>
            </div>
        </div>
    )
}

export default Register