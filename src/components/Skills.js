import React from 'react'
import './Skills.css'
function Skills() {
    return (
        <div className="skills">
          <div className="heading" ><h1>Skills</h1></div>
            <div className="content">
                <div>
                    <strong>Languages:</strong>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                </div>   
                <div>
                    <strong>Tools And Technologies : </strong>
                    <li>Git and Github</li>
                    <li>NodeJs</li>
                    <li>ExpressJs</li>
                    <li>ReactJs</li>
                    <li>MongoDB</li>
                </div>
                <div>
                    <strong>Subjects :</strong>
                    <li>Operating System</li>
                    <li>DBMS</li>
                    <li>Data Structures And Algorithms </li>
                </div>
             </div>     
        </div>
    )
}

export default Skills
