import React from 'react'
import npmImg from "../Assets/Npm.png"
import { NavLink } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <>
            <img className='ResetnpmImg' src={npmImg} alt="" height={85} width={150} />

            <div className='ForgotPass'>
                <h1 className='ResetP'>Reset Password</h1> <br />
                <p className='ResetPara'>Enter the email address or username you use to sign in.</p>
                <br />
                <p className='ResetEmail'>Email address or username</p>
                <input className='ResetInput' type="email" name="" id="" required /> <br /> <br />
                <button className='ResetBtn'>Get Password Reset Link</button>
            </div>

            <NavLink className="ResetLink" to="/SignIn">Back to Sign In</NavLink>
        </>
    )
}

export default ForgotPassword