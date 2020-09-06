import React, { Component } from "react";
import "./App.css";
import Navigation from "./component/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Puppies from './pages/puppies'
import Home from './pages/home'
import { Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propdata: null,
    };
  }
  componentDidMount() {
    fetch("/addnewthings.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          ...this,
          propdata: res,
        });
        console.log(this.state.propdata);
      });
  }
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navigation /></div>
      <Route
              exact
              path="/"
              render={props => (
                <Home {...props} propdata={this.state.propdata} />
              )}
            />
        <Route
              exact
              path="/puppies"
              render={props => (
                <Puppies {...props} propdata={this.state.propdata} />
              )}
            />
          
          
        
      </BrowserRouter>
    );
  }
}

export default App;
