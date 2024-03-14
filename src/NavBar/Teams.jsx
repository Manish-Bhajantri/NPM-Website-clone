import React from 'react'
import Navbar from './Navbar'
import Footer from '../Foot/Footer'
import npmImg from "../Assets/Npm.png"
import SearchBar from '../SearchComponent/SearchBar'
import DollswithBoxs from "../TeamAssets/3DollswithBoxs.png"
import { NavLink } from 'react-router-dom'
import ProPackageImg from "../ProAssets/ProPackageImg.png"
import ProPackageImg2 from "../ProAssets/ProPackageImg2.png"
import ProPackageImg3 from "../ProAssets/ProPackageImg3.png"
import ProRightSymbol from "../ProAssets/ProRightSymbol.png"

const Teams = () => {
  return (
    <>
      <Navbar />
      <div className='HomeContainer'>
        <div className='npmLogo'>
          <img src={npmImg} alt="npm" height={40} width={80} />
        </div>

        <SearchBar />
      </div> <br />

      <div className="row1"></div>

      <div className='Teamrow1'>
        <img style={{ display: "block", margin: "auto", paddingTop: "60px" }} src={DollswithBoxs} alt="" />

        <h1 style={{ fontSize: "80px", color: "white", textAlign: "center", fontFamily: "sans-serif", marginTop: "40px" }}>npm Teams</h1>

        <p className='TeamPara'>Share code and collaborate with the tools that make JavaScript the world's best software ecosystem</p>

        <button className='TeamBtn'><NavLink style={{ color: "white", textDecoration: "none", fontSize: "17px", fontWeight: "550" }}>Get Started</NavLink></button>
      </div>

      <div className='Teamrow2'>
        <div>
          <img style={{ display: "block", margin: "auto", marginTop: "80px" }} src={ProPackageImg} alt="" />
          <h2 style={{ fontSize: "22px", fontFamily: 'Poppins sans-serif', textAlign: "center", marginTop: "20px", letterSpacing: "1px" }}>Unlimited public packages</h2>
          <p style={{ font: "16px", fontFamily: 'Arimo , sans-serif', color: "black", textAlign: "center", marginTop: "15px" }}>Bring the best of open source JavaScript development to your own projects.</p>
        </div>

        <div>
          <img style={{ display: "block", margin: "auto", marginTop: "50px" }} src={ProPackageImg2} alt="" />
          <h2 style={{ fontSize: "22px", fontFamily: 'Poppins sans-serif', textAlign: "center", marginTop: "20px", letterSpacing: "1px" }}>Unlimited private packages</h2>
          <p style={{ font: "16px", fontFamily: 'Arimo , sans-serif', color: "black", textAlign: "center", marginTop: "15px" }}>Seamlessly integrate public and private packages into your development cycle.</p>
        </div>

        <div>
          <img style={{ display: "block", margin: "auto", marginTop: "50px" }} src={ProPackageImg3} alt="" />
          <h2 style={{ fontSize: "22px", fontFamily: 'Poppins sans-serif', textAlign: "center", marginTop: "20px", letterSpacing: "1px" }}>Package-based permissions</h2>
          <p style={{ font: "16px", fontFamily: 'Arimo , sans-serif', color: "black", textAlign: "center", marginTop: "15px" }}>Add collaborators to work on your public and private packages together.</p>
        </div> <br /><br /><br /><br /><br /><br />

        <div className='FeatureCom'>
          <h1 className='color'> </h1>
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

          <button className='TeamGetStarted'><NavLink to="/SignIn" style={{ color: "white", fontSize: "16px", fontFamily: "Poppins, sans-serif", textDecoration: "none", fontWeight: "550", letterSpacing: "0.5px" }}>Get Started</NavLink></button>
        </div>
      </div>

      <hr />

      <Footer />
    </>
  )
}

export default Teams