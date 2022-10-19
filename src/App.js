import "./App.css";

import React, { Component } from "react";
import { NavBar } from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export class App extends Component {
  pageSize = 6;
  // for passing the api key as a env file we are using this method
  apikey = process.env.REACT_APP_NEWS_API;
 
  state = {
    progress:0
  }
 
  setProgress = (progress) => {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
      <Router>
          <NavBar /> 
          <LoadingBar
            color='#f11946'
            height={5}
        progress={this.state.progress}/>
      <Routes>
      <Route path="/" element = {<News setProgress={this.setProgress}  apikey={this.apikey}  pageSize = {this.pageSize} country = "in" category = "general"/>}/>
      <Route path="/business" element = {<News setProgress={this.setProgress} apikey={this.apikey}  key="business" pageSize = {this.pageSize} country = "in" category = "business"/>}/>
      <Route path="/entertainment" element = {<News setProgress={this.setProgress} apikey={this.apikey}  key ="entertainment"pageSize = {this.pageSize} country = "in" category = "entertainment"/>}/>
      <Route path="/general" element = {<News setProgress={this.setProgress} apikey={this.apikey}  key ="general" pageSize = {this.pageSize} country = "in" category = "general"/>}/>
      <Route path="/health" element = {<News setProgress={this.setProgress} apikey={this.apikey}  key ="health"pageSize = {this.pageSize} country = "in" category = "health"/>}/>
      <Route path="/science" element = {<News setProgress={this.setProgress} apikey={this.apikey}  key="science" pageSize = {this.pageSize} country = "in" category = "science"/>}/>
      <Route path="/sports" element = {<News setProgress={this.setProgress} apikey={this.apikey}  key="sports" pageSize = {this.pageSize} country = "in" category = "sports"/>}/>
      <Route path="/technology" element = {<News setProgress={this.setProgress} apikey={this.apikey}  key="technology" pageSize = {this.pageSize} country = "in" category = "technology"/>}/>

      </Routes>
      </Router>
    </div>
    );
  }
}

export default App;
