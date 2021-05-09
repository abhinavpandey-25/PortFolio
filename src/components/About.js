import React from 'react'
import './About.css'
function About() {
    return (
        <>
        <div style={{display:'flex',justifyContent:'center',color:'orange'}}>
                <h1>About</h1>
        </div>
        <div className="about">
             <p>I am a final year student having knowlege of core subjects like dbms 
             , OS ,Java .</p>
              <p>I also like to solve algorithmic problems based on data structures .</p>
               <p>I know basics of MERN stack .</p>
               <p>I love to play sports mostly table tennis , badminton . </p>        
               <ul>
            <div style={{display:'flex',marginTop:'5px',alignItems:'center',flexDirection:'column'}}>
            <h3 style={{color:'orange'}}>Projects</h3>
            <p>Ecommerce Website using React (NextJs) . </p>
            <p>To do list using Express,Mongo,React. </p>
            <p>Instagram Clone using React,Redux,MongoDB,Express .</p>
            <button className="button" ><a href="https://github.com/abhinavpandey-25?tab=repositories" style={{color:'white'}}>Visit Github</a></button>
             </div>  
        </ul>
        </div>
        
        
        </>
    )
}

export default About;
