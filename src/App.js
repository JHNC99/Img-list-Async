// import { PropTypes } from 'react'
import React from "react";
import axios from 'axios';
import ShearchInput from "./components/ShearchInput";
class App extends React.Component {
  //Recibimoslos datos del componente SearchInput
  onSearchSubmit=(entry)=>{
    const response =  axios.get(`https://pixabay.com/api/?key=12973143-e1ea73fe98fc5af5156bb3056&q=${entry}&image_type=photo`)
    console.log(response)
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "35px" }}>
        <ShearchInput onSearchSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
