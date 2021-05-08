import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
},
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));
export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
      <> 
    <div style={{display:'flex',justifyContent:'center',marginBottom:'10px'}}>
    <h1>My Projects</h1>
</div>
      <div style={{display:'flex',justifyContent:'space-around'}}>
         
    <Card className={classes.root}  >
      <CardMedia
        className={classes.media}
        image="https://res.cloudinary.com/storagearea/image/upload/v1620462298/whatsapp_fgfm4z.jpg"
         />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        This is a whatsapp clone which is made using react and firebase .
        In this the concept of Context api in react is used . The Login Part uses the firebase
        Google Authentication .
        </Typography>
      </CardContent>
     <div style={{display:'flex',justifyContent:'center'}}>
         <IconButton>
         <Button variant="contained" color="primary"  href="https://whatsappclone-44797.firebaseapp.com/rooms/6Fh9fxTf28saSHbSLDpr">
  View Project
</Button>
         </IconButton>
     </div>

    </Card>
    <Card className={classes.root} style={{marginLeft:'10px'}} >
      <CardMedia
        className={classes.media}
        image="https://res.cloudinary.com/storagearea/image/upload/v1620462882/Todo_lfddjh.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        This is a whatsapp clone which is made using react and firebase .
        In this the concept of Context api in react is used . The Login Part uses the firebase
        Google Authentication .
        </Typography>
      </CardContent>
     <div style={{display:'flex',justifyContent:'center'}}>
         <IconButton>
         <Button variant="contained" color="primary"  href="https://whatsappclone-44797.firebaseapp.com/rooms/6Fh9fxTf28saSHbSLDpr">
  View Project
</Button>
         </IconButton>
     </div>

    </Card>

    <Card className={classes.root} style={{marginLeft:'10px'}} >
      <CardMedia
        className={classes.media}
        image="https://res.cloudinary.com/storagearea/image/upload/v1620463473/ecommerce_notzzb.png"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        This is an Ecommerce website made using nextJs along with mongodb as a database and some html ,css .
        The website is using jwt tokens for Authentication of a user and also consist of Admin who is having a feature of toggling role of a person.
        </Typography>
      </CardContent>
     <div style={{display:'flex',justifyContent:'center'}}>
         <IconButton>
         <Button variant="contained" color="primary"  href="https://github.com/abhinavpandey-25/Ecommerce">
  View Project
</Button>
         </IconButton>
     </div>

    </Card>
  </div>
  </>
  );
}
