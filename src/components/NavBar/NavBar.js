import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
function NavBar() {
    const [open,setopen]=useState(false);
    console.log(open);
    return (
        <nav className="navbar"> 
            <div className="list-wrapper">
                <img onClick={()=>setopen(!open)}  src={!open?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-1rpHsw7ooCiVA4uU8MrYioqIMQXN3x6o5n__aKghrt3PB_UPbTWhThEqivolSXbof0&usqp=CAU":"data:image/png;base64,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"}/>
                <ul  style={{left:open?'0':'-100vw',opacity:open?'1':'0',background:open?'lightgrey':''}}>
                   <li>
                   <Link onClick={()=>open?setopen(!open):''} to="/">Home</Link>    
                   </li> 
                   <li>
                   <Link onClick={()=>open?setopen(!open):''} to="/about">About</Link>    
                   </li> 
                   <li>
                   <Link onClick={()=>open?setopen(!open):''} to="/skills">Skills</Link>    
                   </li> 
                   <li>
                   <Link onClick={()=>open?setopen(!open):''} to="/contact">Contact</Link>    
                   </li> 
                   <li>
                   <Link onClick={()=>open?setopen(!open):''} to="/projects">Projects</Link>    
                   </li> 
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
