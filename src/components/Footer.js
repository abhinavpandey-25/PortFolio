import React from 'react'
import './Footer.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
  
import { IconButton } from '@material-ui/core'
export default function Footer() {
    return (
        <footer >
            <div class="foot">
                <IconButton style={{color:'white',size:'medium'}} href="https://www.linkedin.com/in/abhinav-pandey-b0a87114b/"> 

                 <LinkedInIcon style={{fontSize:'40'}}/>
                    
                </IconButton>
                <IconButton style={{color:'white'}}>

                <TwitterIcon style={{fontSize:'40'}}/>
                    
                </IconButton>
                <IconButton style={{color:'white'}} href="https://github.com/abhinavpandey-25">

                <GitHubIcon style={{fontSize:'40'}}/>
                    
                </IconButton>
            </div>
        </footer>
    )
}
