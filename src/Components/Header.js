import React from 'react';
import memeLogo from "../images/meme.jpg";

export default function Header() {
    
    return (<div>
            <nav className="navbar navbar-light bg-light ">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                    <img  src={memeLogo} alt="" width="70" height="70" className="d-inline-block align-text-top"></img>
                    <span style={{fontSize:"5vh", paddingLeft:"1vh"}}>Meme Generator</span>
                </a>
                </div>
            </nav>
    </div>);
}
