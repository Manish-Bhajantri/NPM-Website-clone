import React from 'react'
import Img1 from "../Assets/N.png"
import Img2 from "../Assets/GitHub.png"
import { NavLink } from 'react-router-dom'
import App from '../App.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Imgs'>
                <NavLink><img src={Img1} alt="nImg" height={50} width={50} /></NavLink>
                <br /> <br />
                <NavLink><img src={Img2} alt="GitHubImg" height={50} width={50} /></NavLink>
            </div>
            <div>
                <ul className='UlLinks'>
                    <h3 className='FooterPoints'>Support</h3>
                    <li><NavLink className="FooterLinks">Help</NavLink></li>
                    <li><NavLink className="FooterLinks">Advisories</NavLink></li>
                    <li><NavLink className="FooterLinks">Status</NavLink></li>
                    <li><NavLink className="FooterLinks">Contact npm</NavLink></li>
                </ul>
            </div>

            <div>
                <ul className='UlLinks'>
                    <h3 className='FooterPoints'>Company</h3>
                    <li><NavLink className="FooterLinks">About</NavLink></li>
                    <li><NavLink className="FooterLinks">Blog</NavLink></li>
                    <li><NavLink className="FooterLinks">Press</NavLink></li>
                    <li><NavLink className="FooterLinks"></NavLink></li>
                </ul>
            </div>

            <div>
                <ul className='UlLinks'>
                    <h3 className='FooterPoints'>Terms & Policies</h3>
                    <li><NavLink className="FooterLinks">Policies</NavLink></li>
                    <li><NavLink className="FooterLinks">Terms of Use</NavLink></li>
                    <li><NavLink className="FooterLinks">Code of Conduct</NavLink></li>
                    <li><NavLink className="FooterLinks">Privacy</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer