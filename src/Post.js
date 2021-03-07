import React,{useEffect,useState} from 'react'
import {useLocation} from 'react-router-dom'
import './App.css'
import queryString from 'query-string'
import axios from 'axios'

const Post = () => {
  const [post,setPost]=useState([])
const {search}=useLocation()
const {i}=queryString.parse(search);



useEffect(()=>{
  axios.get("https://dorian-scrawny-join.glitch.me/feedone/"+i)
  .then(response=>{
setPost([response.data])
  })
  .catch(err=>{
    alert(err)
  })
 },[]) 

  

  return (
    <div className="post">
    {post.map((record)=>
        <div>
        <h1>{record.heading}</h1><br />
        <div dangerouslySetInnerHTML={{__html:record.post}} ></div>
        
        </div>
      )
      }
    
    </div>
  )



}
export default Post;
