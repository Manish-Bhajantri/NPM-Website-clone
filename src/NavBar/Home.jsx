import React from 'react'
import Navbar from './Navbar'
import App from "../App.css"
import { NavLink } from 'react-router-dom'
import npmImg from "../Assets/Npm.png"
import Amiba from "../Assets/Amiba.png"
import Footer from '../Foot/Footer'
import SearchBar from '../SearchComponent/SearchBar'

const Home = () => {

    return (
        <>
            <Navbar />
            <div className='HomeContainer'>
                <div className='npmLogo'>
                    <img src={npmImg} alt="npm" height={40} width={75} />
                </div>

                <SearchBar />
            </div>

            <div className='Homerow1'>

                <h1 className='Homeheading'>Build amazing things</h1>

                <p className='HomePara'>We're GitHub, the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.</p>

                <p className='HomeMoto'>Take your JavaScript development up a notch</p>

                <p className='HomePara'>Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.</p>

                <div className='Btns'>
                    <div>
                        <NavLink to="/SignUp"><button className='HomeSingUpBtn'>Sign up for free</button></NavLink>
                    </div>

                    <div>
                        <NavLink to="/Pro"><button className='HomeLearnBtn'>Learn about Pro</button></NavLink>
                    </div>
                </div>
            </div>

            <div className='Homerow2'>

                <img className='Homerow2Img' src={Amiba} alt="Image" />

                <p className='Homerow2Moto'>Bring the best of open source to you, your team, and your company</p>

                <p className='Homerow2Para'>Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.</p>
            </div>

            <hr />

            <Footer />
        </>
    )
}

export default Home