import React from 'react';
import './Post.css';
import logo from './logo.svg';
import Avatar from "@mui/material/Avatar";
function Post({username, caption, imageurl})
 {
  return <div className="Post">
       <div>
       <Avatar
        className="post_avatar"
        alt= 'Haris'
        src=""
        />  
       </div>
        
            
     <h3> (username)</h3>
      
<img className="post-image" src ="https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/" alt ="New" />

 <h4 className= "post_text"><strong>haris</strong> WOW </h4>       
  
  </div>
  }


export default Post;
