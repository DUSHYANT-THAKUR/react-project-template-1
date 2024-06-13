import React from "react";
import {Link} from "react-router-dom"
function About(){
    return (
        <div>
            <h1>Hi , i am About Page</h1>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
            <Link to="/Service">Service</Link>
        </div>
    )
}
export default About;