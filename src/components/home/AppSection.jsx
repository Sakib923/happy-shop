import React from 'react'
import { Link } from 'react-router-dom';
// import appIcon from ";

const btnText = "Sign up for Free";
const title = "Shop Anytime, Anywhere";
const desc = "Take shop on any device with our app & get your product at your door step. Just download & install & start to shop";

function AppSection() {
  return (
    <div className="app-section padding-tb">
        <div className="container">
            <div className="section-header text-center">
                <Link to="/sing-up" className="lab-btn mb-4">{btnText} </Link>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
            </div>

            <div className="section-wrapper">
                <ul className="lab-ul">
                    <li><a href="#" ><img  src="src\assets\images\app\01.jpg" /></a></li>
                    <li><a href="#" ><img src="src\assets\images\app\02.jpg" alt='play store' /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AppSection