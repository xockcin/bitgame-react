import React, { Component } from 'react'


class Byte extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="d-flex bg-info rounded-pill justify-content-around">
        <div id="byte" class="btn-group" role="group"></div>
      </div>
    );
  }
}

function Keypad() {
  const buttons = [
    {
      name: "inc",
      label: "+"
    },
    {
      name: "lsh",
      label: "<"
    },
    {
      name: "cmp",
      label: "~"
    },
    {
      name: "rsh",
      label: ">"
    },
    {
      name: "dec",
      label: "-"
    },
  ]
  return (
    <h1>{buttons[1]}</h1>
  )
}

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="container bg-secondary w-75 border rounded p-3 mt-4">
        <Byte />
        <hr />
        <Keypad />
      </div>
    );
  }
}

export default GameBoard