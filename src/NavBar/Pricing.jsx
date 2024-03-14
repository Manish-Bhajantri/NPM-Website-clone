import React from 'react'
import Navbar from './Navbar'
import Footer from '../Foot/Footer'
import npmImg from "../Assets/Npm.png"
import SearchBar from '../SearchComponent/SearchBar'
import SmallOrange from "../PriceAssets/SmallOrangeImg.png"
import { NavLink } from 'react-router-dom'
import SecLongBoxImg from "../PriceAssets/SecLongBoxImg.png"
import ThirdLongBoxImg from "../PriceAssets/ThirdLongBoxImg.png"
import ProRightSymbol from "../ProAssets/ProRightSymbol.png"

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className='HomeContainer'>
        <div className='npmLogo'>
          <img src={npmImg} alt="npm" height={40} width={80} />
        </div>

        <SearchBar />
      </div> <br />

      <div className='Pricerow2'>
        <h1 style={{ fontSize: "85px", color: "white", fontFamily: " Poppins, sans-serif", fontWeight: "600", textAlign: "center", marginTop: "60px", letterSpacing: "1px" }}>Pricing</h1>

        <div className='MultyLongBoxs'>
          <div className='LongBox1'>
            <h3 className='LongBoxHeading'>For Public Package Authors</h3>

            <img style={{ display: "block", margin: "auto", marginTop: "80px" }} src={SmallOrange} alt="Small Orange Image" height={70} width={70} />

            <h1 style={{ color: "white", fontSize: "24px", fontFamily: "sans-serif", textAlign: "center", marginTop: "70px" }}>Free</h1>

            <div style={{ marginTop: "30px" }}>
              <span style={{ color: "white", fontSize: "40px", verticalAlign: "top", marginLeft: "120px", }}>$</span>
              <span style={{ color: "white", fontSize: "90px" }}>0</span>
            </div>

            <h3 style={{ color: "white", textAlign: "center", fontSize: "16px", fontFamily: "sans-serif" }}>Unlimited <br /> Publi Package</h3>

            <button className='create'><NavLink style={{ color: "white", fontSize: "16px", fontFamily: "sans-serif", textDecoration: "none", fontWeight: "800", letterSpacing: "1px" }}>Create</NavLink></button>
          </div>



          <div className='LongBox2'>
            <h3 className='IndividualCreator'>For Individual <br /> Creators</h3>
            <img src={SecLongBoxImg} alt="" height={200} width={300} />
            <h1 style={{ color: "black", fontSize: "30px", fontFamily: "sans-serif", textAlign: "center", marginTop: "20px" }}>Pro</h1>
            <div style={{ marginTop: "20px" }}>
              <span style={{ color: "gray", fontSize: "40px", verticalAlign: "top", marginLeft: "120px", }}>$</span>
              <span style={{ color: "black", fontSize: "90px" }}>7</span> <br />
              <span style={{ display: "block", textAlign: "center", fontSize: "13px" }}>Per Month</span>
            </div>
            <h3 style={{ color: "black", textAlign: "center", fontSize: "16px", fontFamily: "sans-serif", marginTop: "15px", fontWeight: "200" }}>Unlimited <br /> Publi Package</h3>
            <h3 style={{ color: "black", textAlign: "center", fontSize: "16px", fontFamily: "sans-serif", marginTop: "15px", fontWeight: "200" }}>Unlimited <br /> Publi Package</h3>
            <h3 style={{ color: "black", textAlign: "center", fontSize: "16px", fontFamily: "sans-serif", marginTop: "15px", fontWeight: "200" }}>Unlimited <br /> Publi Package</h3>

            <button className='StartwithPro'><NavLink style={{ color: "black", fontSize: "16px", fontFamily: "sans-serif", textDecoration: "none", fontWeight: "800", letterSpacing: "1px" }}>Get Started with Pro</NavLink></button>
          </div>



          <div className='LongBox3'>
            <h3 className='IndividualCreator'>For Individual <br /> Creators</h3>
            <img src={ThirdLongBoxImg} alt="" height={200} width={300} />
            <h1 style={{ color: "black", fontSize: "30px", fontFamily: "sans-serif", textAlign: "center", marginTop: "20px" }}>Pro</h1>
            <div style={{ marginTop: "20px" }}>
              <span style={{ color: "gray", fontSize: "40px", verticalAlign: "top", marginLeft: "120px", }}>$</span>
              <span style={{ color: "black", fontSize: "90px" }}>7</span> <br />
              <span style={{ display: "block", textAlign: "center", fontSize: "13px" }}>Per Month</span>
            </div>
            <h3 style={{ color: "black", textAlign: "center", fontSize: "16px", fontFamily: "sans-serif", marginTop: "15px", fontWeight: "200" }}>Unlimited <br /> Publi Package</h3>
            <h3 style={{ color: "black", textAlign: "center", fontSize: "16px", fontFamily: "sans-serif", marginTop: "15px", fontWeight: "200" }}>Unlimited <br /> Publi Package</h3>
            <h3 style={{ color: "black", textAlign: "center", fontSize: "16px", fontFamily: "sans-serif", marginTop: "15px", fontWeight: "200" }}>Team-based <br /> permissions</h3>

            <button className='StartwithPro'><NavLink style={{ color: "black", fontSize: "16px", fontFamily: "sans-serif", textDecoration: "none", fontWeight: "800", letterSpacing: "1px" }}>Get Started with Teams</NavLink></button>
          </div>
        </div>
      </div>
      <div className='Pricerow3'>
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
          <h1 className='color'></h1>
          <p className='note'>All versions include basic support</p>
        </div>
      </div>

      <hr />

      <Footer />
    </>
  )
}

export default Pricing