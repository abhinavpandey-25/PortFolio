import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import Type from './Type'
export default function Home() {
    return (
        <div className="home">
            <div className="title">
            <h2 style={{letterSpacing:'5px',lineHeight:'50px'}} >Hi, I'm <span style={{color:'#cd5ff8'}}>Abhinav</span> <span className="wave">👋🏻</span></h2>
                {/* <h2 className="dynamic" >Abhinav .</h2> */}
               <div style={{color:'#cd5ff8',fontSize:'30px' }}>

               <Type/>
                   </div> 
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
