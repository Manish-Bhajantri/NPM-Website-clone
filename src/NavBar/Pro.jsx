import React from 'react'
import Navbar from './Navbar'
import Footer from '../Foot/Footer'
import SearchBar from '../SearchComponent/SearchBar'
import npmImg from "../Assets/Npm.png"
import ProMainImg from "../ProAssets/ProMainImg.png"
import ProRightImg from "../ProAssets/ProRightImg.png"
import ProLeftImg from "../ProAssets/ProLeftImg.png"
import { NavLink } from 'react-router-dom'
import ProPackageImg from "../ProAssets/ProPackageImg.png"
import ProPackageImg2 from "../ProAssets/ProPackageImg2.png"
import ProPackageImg3 from "../ProAssets/ProPackageImg3.png"
import Prorow2DollImg from "../ProAssets/Prorow2DollImg.png"
import ProRightSymbol from "../ProAssets/ProRightSymbol.png"

const Pro = () => {
    return (
        <div className='ProPage'>
            <Navbar />
            <div className='HomeContainer'>
                <div className='npmLogo'>
                    <img src={npmImg} alt="npm" height={40} width={80} />
                </div>

                <SearchBar />
            </div><br />

            <div className="row1"></div>

            <div className='Prorow1'>
                <img className='ProImg' src={ProMainImg} alt="" />

                <h1 className='NpmHeding'>npm Pro</h1>

                <img className='ProRightImg' src={ProRightImg} alt="" />

                <h3 className='ProPara'>Publish your own packages to the world's most popular software ecosystem</h3>

                <img className='ProLeftImg' src={ProLeftImg} alt="" height={840} />

                <button className='ProgetStarted'><NavLink className="GS">Get Started</NavLink></button>

                <img className='ProPackageImg' src={ProPackageImg} alt="" height={70} width={70} />

                <h2 className='UnlimitedPack'>Unlimited public packages</h2>

                <p className='UnlimitedPackPara'>Bring the best of open source JavaScript development to your own projects.</p>

                <img className='ProPackageImg2' src={ProPackageImg2} alt="" height={70} width={70} />

                <h2 className='UnlimitedPack2'>Unlimited private packages</h2>

                <p className='UnlimitedPackPara2'>Seamlessly integrate public and private packages into your development cycle</p>

                <img className='ProPackageImg3' src={ProPackageImg3} alt="" height={70} width={70} />

                <h2 className='UnlimitedPack3'>Package-based permissions</h2>

                <p className='UnlimitedPackPara3'>Add collaborators to work on your public and private packages together.</p>
            </div>

            <div className='Prorow2'>
                <img className='Prorow2DollImg' src={Prorow2DollImg} alt="Prorow2DollImg" height={275} width={255} />

                <h1 className='WorkingTeam'>Working on a team?</h1>

                <h1 className='npmTeams'>Try npm Teams.</h1>

                <p className='ProPara2'>Team-based access controls to manage package permissions across your organization.</p>

                <button className='ProBtn'><NavLink to="/" className="ProLinkBtn">Learn about Teams</NavLink></button>
            </div>

            <div className='Prorow3'>
                <div className='FeatureCom'>
                    <h1 className='color'></h1>
                    <h1 className='Prorow3Heading'>Feature Comparison</h1>
                    <p className='ultimate'>Unlimited public packages & automatic security warnings</p>

                    <div className='ProSymbols'>
                        <div>
                            <h2 className='free'>Free</h2> <br />
                            <img src={ProRightSymbol} alt="" />
                        </div>

                        <div>
                            <h2 className='pro'>Pro</h2> <br />
                            <img src={ProRightSymbol} alt="" />
                        </div>

                        <div>
                            <h2 className='pro'>Teams</h2> <br />
                            <img src={ProRightSymbol} alt="" />
                        </div>
                    </div>

                    <div className='ProSymbols' style={{ background: "#eee" }}>
                        <div>
                            <h2 className='free'>Free</h2> <br />
                        </div>

                        <div>
                            <h2 className='pro'>Pro</h2> <br />
                            <img src={ProRightSymbol} alt="" />
                        </div>

                        <div>
                            <h2 className='pro'>Teams</h2> <br />
                            <img src={ProRightSymbol} alt="" />
                        </div>
                    </div>

                    <div className='ProSymbols'>
                        <div>
                            <h2 className='free'>Free</h2> <br />

                        </div>

                        <div>
                            <h2 className='pro'>Pro</h2> <br />

                        </div>

                        <div>
                            <h2 className='pro'>Teams</h2> <br />
                            <img src={ProRightSymbol} alt="" />
                        </div>
                    </div>
                    <p className='note'>All versions include basic support</p>

                    <div id='GS'>
                        <h1 className='getStarted'>Get Started</h1>

                        <div className='box1'>
                            <div className='colorLine'></div>
                            <h2 className='circle'>1</h2>

                            <h2 className='createnewAC'>Create an account</h2>
                            <p className='createPara'>If you don't have one yet,</p>

                            <NavLink to="/SignUp" className="createAClink">create a free npm account</NavLink>
                        </div>

                        <br /><br />

                        <div className='box1'>
                            <div className='colorLine'></div>
                            <h2 className='circle'>2</h2>

                            <h2 className='createnewAC'>Upgrade your account</h2>
                            <p className='createPara'>Log into your account and</p>

                            <NavLink to="/SignIn" className="createAClink">upgrade your plan</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <Footer />
        </div>
    )
}

export default Pro