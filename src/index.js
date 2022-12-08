import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay"
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      lat: null, errorMessage:null
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({
        lat : position.coords.latitude
      }),
      (err) => this.setState({errorMessage:err.message})
    );
  }
  render() {
       if (this.state.lat && !this.state.errorMessage) {
        return    <div> <SeasonDisplay lat ={this.state.lat}/>  </div>
       } if(!this.state.lat && this.state.errorMessage) {
       return <div> <ErrorMessage message ={this.state.errorMessage }/>  </div> 
       }
     return <Loader message="We are fetching your location"/>
       
  }
}


ReactDOM.render( < App / > , document.querySelector("#root"));