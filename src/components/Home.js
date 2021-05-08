import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
export default function Home() {
    return (
        <div className="home">
            <div className="title">
            <h2 style={{letterSpacing:'5px',lineHeight:'50px'}} >Hi , I am</h2>
            <h2 className="dynamic" >Abhinav .</h2>
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
