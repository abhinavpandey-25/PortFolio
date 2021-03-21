import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
export default function Home() {
    return (
        <div className="home">
            <div className="title">
                <h1>
                <p>HI , </p>
                <p>I am Abhinav</p>
                </h1>
                <Link to="/about">
                    <button className="button">More Info</button>
                </Link>
            </div>
            <div  className="pic">
                <img  src={`${process.env.PUBLIC_URL}/profile.png`}/>
            </div>
        </div>
    )
}
