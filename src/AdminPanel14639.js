import React,{Fragment}from 'react'
import './App.css';
import axios from 'axios'


class AdminPanel14639 extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      i:"",
      heading:"",
      post:<></>
    }
  }
  
  
  add = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  
  
  //post
  send = () =>{
    const body={
      i:this.state.i,
      heading:this.state.heading,
      post:this.state.post
    }
    axios.post("https://dorian-scrawny-join.glitch.me/post",body).then(response=>{
      alert("posted")
    }).catch(error=>{
      alert(error)
    })
    
    
  }
  
  //del
del = () =>{
    
    axios.delete("http://localhost:8000/del/"+this.state.i).then(response=>{
      alert("posted")
    }).catch(error=>{
      alert(error)
    })
    
    
  }
  
  
  
  
  
  
render(){
  return (
    <div className="App">
    <input type="number" name="i" onChange={this.add} />
    <input type="text" name="heading" onChange={this.add}/><br />
<textarea name="post" rows="4" cols="50" onChange={this.add}></textarea><br />
<button onClick={this.send}>post</button>
<button onClick={this.del}>del</button>


    </div>
  );
}


}
export default AdminPanel14639;
