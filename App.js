import React from 'react';
import logo from './logo.svg';
import './App.css';
import {onSnapshot} from 'firebase/firestore';
import  {useState , useEffect} from 'react';
import Post  from './Post';
//import db from './firebase'
import { Input, Modal} from '@mui/material';
import { ClassNames } from '@emotion/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import InstaFeeds from "./InstaFeed";
// import  { app, auth, db, storage} from './firebase'
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';
//import { getStorage } from "firebase/storage";

//import { initializeApp } from "firebase/app";
//import { getFirestore } from 'firebase/firestore/lite'
//import {auth, db, storage} from './firebase '


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



 function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 }
;

 function App() {
  //const classes = useStyles();
   const [posts, setPosts] = useState([]);
 const [open, setOpen] = useState(false);
 const [username, setusername] = useState("");
 const [email, setemail] = useState("");
 const [password, setpassword] = useState("");
 const [openLogIn, setopenLogIn] = useState(false);

//  const user = auth.currentUser;
// useEffect(() => {
// const Unsubscribe = auth.OnAuthStateChnaged((authUser) =>
// {
// //   if (authUser) {
// //     //if user is logged in
// //     console.log(authUser);
// //     setUser(authUser);
  
// // }
// // else {
// // setUser(null)
// //   }
// // })
// // return() =>
// // {
// //   Unsubscribe();
// // }
// // },[user, username]);


//       useEffect (() => {
//        db.collection('Posts').onSnapshot (snapshot =>{
//     //every time a new post added this fires
//      setPosts(snapshot.docs.map(doc => ( {
//        id :doc.id, 
//      post: doc.data()
//      })));
//    })
//  } , []);

 const Modalstyle = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };

 //sx={Modalstyle}
const SignUp = (event) => {
// event.preventDefault();
// auth
// .createuserWithEmailAndPassword(email,password)
// .catch((error) => alert(error.message)
// .then((authUser) =>{
//  return authUser.user.updateProfile({
//   displayName: username,
// })
// })
// .authUser.user
// );
 }
 const LogIn =(event) => {
//   event.preventDefault();
// auth
// .LogInwithEmailAndPassword(email, password)
// .catch((error) => alert(error.message))
// setopenLogIn(false);
 }

  return (  
      <div className="App" >
       <img
        className ="app_headerImage"
        src= "/InstagramOri.png"
        alt = "Instagram"
        />
     
      { <div>
        
        <Modal
        open={open}
        onClose={() => setOpen(false) }
        
      >
     
        <div style ={Modalstyle} >
        <center>
  
      
         
           <img
        className ="app_headerImage"
        src= "/InstagramOri.png"
        alt = "Instagram"
        />
       
        </center>
        <form>
         <Input
        type= "text"
        placeholder="username"
        value ={username}
        onChange ={(e) => setusername(e.target.value)}
        />
         <Input
        type= "text"
        placeholder="email"
        value ={email}
        onChange ={(e) => setemail(e.target.value)}
        />
         <Input
        type= "text"
        placeholder="password"
        value ={password}
        onChange ={(e) => setpassword(e.target.value)}
        /> 
        <Button type= "submit" onClick = {SignUp} > SignUp </Button> 
        
        </form>
        </div>
       
      </Modal> 
    </div> }
    <Modal
        open={openLogIn}
        onClose={() => setopenLogIn(false) }
        
      >
     
        <div style ={Modalstyle} >
        <center>
  
      
         
           <img
        className ="app_headerImage"
        src= "/InstagramLogo.jpg"
        alt = "Instagram"
        />
       
        </center>
        <form className='app_SignUp'>
         <Input
        type= "text"
        placeholder="username"
        value ={username}
        onChange ={(e) => setusername(e.target.value)}
        />
      
         <Input
        type= "text"
        placeholder="password"
        value ={password}
        onChange ={(e) => setpassword(e.target.value)}
        /> 
        <Button type= "submit" onClick = {LogIn} > LogIn </Button> 
        
        </form>
        </div>
      {/* //onClick = {}() => auth.signOut  */}
      </Modal> 
      
    {/* {user? (
      <Button > LogOut</Button>  
    ): (
       <div className = "app_loginCOntainer">
         <Button onClick = {() => setopenLogIn(true)}> LogIn </Button>
         <Button onClick = {() => setOpen(true)}> SignUp </Button> */}
     {/* </div> */}

    )
     (
       <Button onClick = {() => setOpen(true)}> SignUp </Button>
     )
     
      { <Button onClick = {(SignUp) => setOpen(true)}> SignUp </Button> }
     <h1> Hi This is my Instagram Clone</h1>
      <Post  />
      
{/* <div  
className="app_Posts"> {
        posts.map(({id ,Post }) => 
        // (
        //   <Post key={id} username ={Post.username} caption= {Post.caption} imageUrl ={Post.imageUrl} />
        // )
        )
 }
        </div> */}
  </div>
  )}
  export default App;