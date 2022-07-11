import React from "react";
import reactLogo from "../images/reactlogo.png"

function Navbar(){
    return(
        <header>
            <nav>
                <img src={reactLogo} alt="" className="react--logo" />
                <h3>ReactFacts</h3>
                <h4>React Course - Project 1</h4>
            </nav>
        </header>
    )
}

export default Navbar