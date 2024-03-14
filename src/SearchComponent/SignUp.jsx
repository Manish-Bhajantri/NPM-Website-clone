import React from 'react'
import npmImg from "../Assets/Npm.png"
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <div className='SingUpPage'>
        <img className='formImg' src={npmImg} alt="" height={85} width={150} />

        <div className='form'>
          <h1 className='singupHeading'>Sing Up</h1> <br />
          <hr /> <br />
          <label className='formUserName'>Username *</label> <br />

          <input className='userNameBar' type="text" name="username" id="" /><br /> <br />

          <label className='formUserName' htmlFor="">Email address</label><br />

          <input className='userNameBar' type="email" name="email" id="" /><br />

          <span className='spanPara'>Your email address will be added to the metadata of packages that you publish, so it may be seen publicly.</span> <br /><br />

          <div className='password'>
            <div>
              <label className='formUserPassword' htmlFor="">Password</label><br />
              <input className='userPasswordBar' type="password" name="password" id="" /> <br />
            </div>
            <div>
              <button className='showBtn'>| show</button>
            </div>
          </div>

          <span className='spanPara'>Minimum of 10 charecter and must meet our <NavLink className="spanLinks">password guidelines</NavLink></span> <br /> <br />
          <div>
            <input type="checkbox" name="" id="" /> <span></span>
            <span>I agree to the</span> <span></span>
            <NavLink className="spanLinks">End User License Agreement</NavLink> <span></span>
            <span>and the</span> <span></span>
            <NavLink className="spanLinks">Privacy Policy.</NavLink> *
          </div> <br />
          <button className='SignUpBtn'>Create an Account</button>
        </div>

        <p className='AlreadyAc'>Already have an Account?</p>

        <NavLink className="singInLink" to="/SignIn">Sign In</NavLink>

      </div>


    </>
  )
}

export default SignUp