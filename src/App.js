// import { PropTypes } from 'react'
import React from "react";
import axios from "axios";
import ShearchInput from "./components/ShearchInput";
import ImageList from "./components/ImageList";
class App extends React.Component {
  state = { images: [] };
  //Recibimoslos datos del componente SearchInput
  onSearchSubmit = async (entry) => {
    const response = await axios.get(`https://pixabay.com/api/?key=21500875-2f0e28f307b4b00a50bbbb07a&q=${entry}=photo
    `);
    this.setState({ images: response.data.hits });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "35px" }}>
        <ShearchInput onSearchSubmit={this.onSearchSubmit} />
        <h1>{this.state.images.length} imagenes encontradas</h1>
        <div className='ui three stackable cards'>
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
