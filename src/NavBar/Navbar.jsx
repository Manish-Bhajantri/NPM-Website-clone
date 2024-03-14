import React from 'react'
import App from '../App.css'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <h3 className='heart'> 🖤 Manish</h3>
                <ul className='options'>
                    <NavLink className="links" to="/"></NavLink>
                    <NavLink className="links" to="/Pro">Pro</NavLink>
                    <NavLink className="links" to="/Teams">Teams</NavLink>
                    <NavLink className="links" to="/Pricing">Pricing</NavLink>
                    <NavLink className="links" to="/Doc">Documentation</NavLink>
                </ul>
            </div>
            <hr />
        </>

    )
}

export default Navbar