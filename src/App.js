import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div className="header">
          Phone Directory
      </div>
        <button> Add </button>
        <div>
          <span>Name</span><br />
          <span>Phone</span>
        </div> */}
        <label htmlFor="name"> Name: </label>
        <input id="name" type="text" placeholder="Type Here" defaultValue="Vikas"/>
      </div>
    );
  }
}

export default App;
