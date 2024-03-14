import React from "react";
import Navbar from "./NavBar/Navbar";
import { Route, Routes } from "react-router-dom";
import Pro from "./NavBar/Pro";
import Teams from "./NavBar/Teams";
import Pricing from "./NavBar/Pricing";
import Doc from "./NavBar/Doc";
import Home from "./NavBar/Home";
import SignUp from "./SearchComponent/SignUp"
import SignIn from "./SearchComponent/SignIn"
import ForgotPassword from "./SearchComponent/ForgotPassword";

const PerentsFile = () => {
    return (
        <>
            <div className="row1"></div>
            <div className="container">

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Navbar" element={<Navbar />} />
                    <Route path="/Pro" element={<Pro />} />
                    <Route path="/Teams" element={<Teams />} />
                    <Route path="/Pricing" element={<Pricing />} />
                    <Route path="/Doc" element={<Doc />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/SignIn" element={<SignIn />} />
                    <Route path="/ForgotPassword" element={<ForgotPassword />} />
                </Routes>
            </div>
        </>
    )
}
export default PerentsFile