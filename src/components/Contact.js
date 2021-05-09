    import React from 'react'
    import './Contact.css'
    import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
    import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
    import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
    export default function Contact() {
        return (
            <div>
            <div className="heading" ><h1 style={{color:'orange'}}>Contact</h1></div>
            <div className="contact">
               <div>
               <EmailOutlinedIcon style={{margin:'3px',fontSize:40,color:'orange'}}/>
               <h2 style={{color:'orange'}}>Email</h2>    
                   <p style={{color:'orange'}}>abhinav2598@gmail.com</p> 
               </div>
               <div>
                   <ContactPhoneOutlinedIcon style={{margin:'3px',fontSize:40,color:'orange'}}/>
                  <h2 style={{color:'orange'}}>Phone</h2>
                   <p style={{color:'orange'}}>9999999990</p>
               </div>
               <div>
                   <HomeOutlinedIcon style={{margin:'3px',fontSize:40,color:'orange'}}/>
                   <h2 style={{color:'orange'}}> Address
                  </h2>
                   <p style={{color:'orange'}}>G-402 KR Road ,Madhya Pradesh</p>
               </div>
               </div>
         </div>
        )
    }
