import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


const SearchBar = () => {

    const [search, setSearch] = useState("")

    const change = (e) => {
        e.preventDefault()
        console.log(search);
        setSearch("");
    }

    return (
        <div className='searchBar'>
            <div className="group">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
                <input className="input" type="search" placeholder="Search packages" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <div>
                    <button className='Sbutton' type='sumbit' onClick={change}>Search</button>
                </div>
            </div>

            {/* <div>
                <h1>🔍</h1>
            </div>
            <div>
                <input type="text" className='SBar' placeholder='Search Packages' value={search} onChange={(e) => { setSearch(e.target.value) }} />
            </div>
            <div>
                <button className='Sbutton' type='sumbit' onClick={change}>Search</button>
            </div> */}

            <div>
                <NavLink to="/SignUp"><button className="signUp">Sign Up</button></NavLink>
            </div>

            <div>
                <NavLink to="/SignIn"><button className="signIn">Sign In</button></NavLink>
            </div>
        </div>
    )
}

export default SearchBar