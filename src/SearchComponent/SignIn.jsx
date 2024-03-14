import React, { useState } from 'react'
import App from "../App.css"
import { NavLink } from 'react-router-dom'
import npmImg from "../Assets/Npm.png"

const SignIn = () => {

  

  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const UserSub = (e) => {
    console.log(username);
     setUsername("")
  }

  const Pass = () => {
    console.log(pass);
    setPass("")
  }
  

  return (
    <>
      <section className='signInpage'>

        <div>
          <img className='npmimg' src={npmImg} alt="" height={83} width={151} />
        </div>

        <div className='SingInForm'>
          <div className='images'>

          </div>

          <h1 className='signInText'>Sign In</h1> <br />

          <hr /><br />

          <div className="flex-column">
            <label>Username </label></div>
          <div className="inputForm">
            <input type="text" className="SingIninput" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
          </div>

          <div className="flex-column"> <br />

            <label>Password </label></div>
          <div className="inputForm">
            <input type="password" className="SingIninput" required />
          </div>
          <br />
          <div>
            <NavLink to="/ForgotPassword" className="forgotPass">Forgot password?</NavLink>
          </div>

          <button className="button-submit" type='sumbit'>Sign In</button>
          <NavLink to="/SignUp" className="CrtAc">Create Account</NavLink>
        </div>
      </section>
    </>
  )
}

export default SignIn