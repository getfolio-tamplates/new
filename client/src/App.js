import React from 'react'
import './App.css';
import head from './head.jpg'
import AdminPanel14639 from "./AdminPanel14639"
import Coding from './Coding'
import {Switch,Route, BrowserRouter as Router} from 'react-router-dom'

class App extends React.Component{
render(){
  return (
    <div className="App">
  <img src={head} width="100%" height="100%" alt=""/>
<span id="line"></span>&nbsp;
<span id="line"></span>&nbsp;
<span id="line"></span>&nbsp;
<span id="line"></span>&nbsp;
<span id="line"></span>&nbsp;
<span id="line"></span>&nbsp;
<span id="line-f"></span>&nbsp;
<span id="line-r"></span>&nbsp;
<Router>
<Switch>
<Route path="/14639" component={AdminPanel14639}/>
</Switch>
</Router>
<div id="view">
<Coding/>
</div>
<center>
<div id="footer">
author-Sadman Sakib Abesh<br/>
sadmansakibabesh@gmail.com<br />
parsonal blog of Abesh

</div>
</center>
    </div>
  );
}


}
export default App;
