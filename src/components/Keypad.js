import React, { Component } from "react";

export default class keypad extends Component {
  render() {
    return (
      <div>
          <input type="password" onKeyUp={() => console.log('Entering password...')}/>
      </div>
    );
  }
}