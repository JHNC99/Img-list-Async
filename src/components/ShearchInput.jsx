import React from "react";

class ShearchInput extends React.Component {
  /* onInputChange(e) {
    e.preventDefault();
    console.log(e.target.value);

    //onChange={this.onInputChange}
  } */
  // constructor(){
  //   super()
  //   this.onFormSubmit=this.onFormSubmit.bind(this);
  // }
  state={entry:''}
  
  onFormSubmit=(e)=>{
    e.preventDefault();
    this.props.onSearchSubmit(this.state.entry)
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="Search images"
                onChange={(e)=>this.setState({entry:e.target.value})}
                value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default ShearchInput;
