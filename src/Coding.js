import React from 'react'
import './App.css';
import Post from './Post'
import {Switch,Route, BrowserRouter as Router,Link} from 'react-router-dom'
import axios from 'axios'


class Coding extends React.Component{

constructor(props){
  super(props)
  this.state={
    post:[]
  }
}


componentDidMount(){
  axios.get("https://dorian-scrawny-join.glitch.me/feed").then(response=>{
  this.setState({
    post:response.data
  })
  })
  .catch(err=>{
    alert(err)
  })
  
}





  
render(){
  return (
    <div>
 <Router>
 <Switch>
 <Route path="/Post" component={Post} />
 </Switch>
 {this.state.post.map((record)=>
 <div id="coding">
 <Link to={`/Post?i=${record.i}`} id="post">
 {record.heading}
 </Link>
</div>
) }
 </Router>
 
    </div>
  );
}


}
export default Coding;
