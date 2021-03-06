import React, { Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap'

const Dec = (props) => {
  return (
    <div className="bg-info text-white border rounded m-4">
      <h1 className="p-1 m-0">
        {props.number}
      </h1>
    </div>
  );
}

const Hex = (props) => {
  return (
    <div className="bg-info text-white border rounded m-4">
      <h1 className="p-1 m-0">
        {props.hex}
      </h1>
    </div>
  );
}

const Ascii = (props) => {
  return (
    <div className="bg-info text-white border rounded m-4">
      <h1 className="p-1 m-0">
        {props.ascii}
      </h1>
    </div>
  );
}

const GameSpace = (props) => {
  return (
    <div className="d-flex justify-content-around">
      <Dec number={props.number} />
      <Hex hex={props.hex} />
      <Ascii ascii={props.ascii} />
    </div>
  );
}


const Byte = (props) => {
  const buttons = props.byte.slice(0).reverse().map(bit => {
    return (
      <Button 
        className="bit btn m-2 border border-dark rounded"
        color={bit ? "dark" : "light"}>
        {+bit}
      </Button>
    );
  })

  return (
    <div className="d-flex bg-info rounded-pill justify-content-around">
      <ButtonGroup>{buttons}</ButtonGroup>
    </div>
  );
};

<div className="d-flex bg-info rounded-pill justify-content-around">
  <h1>hello</h1>
</div>;

function Keypad(props) {
  const values = [
    {
      name: "inc",
      token: "+",
    },
    {
      name: "lsh",
      token: "<",
    },
    {
      func: "asdfasdf",
      token: "~",
    },
    {
      name: "hello",
      token: ">",
    },
    {
      name: "dec",
      token: "-",
    },
  ]

  const buttons = values.map((value) => {
    return (
      <Button 
        onClick={props.complement}
        className="btn m-2 mx-3 border btn-danger rounded btn-lg">
        {value.token}
      </Button>
    );
  });

  return (
    <div className="d-flex bg-success rounded-pill justify-content-around">
      <ButtonGroup>
        <Button
          onClick={props.shiftLeft}
          className="btn m-2 mx-3 border btn-danger rounded btn-lg"
        >
          &lt;
        </Button>
        <Button
          onClick={props.complement}
          className="btn m-2 mx-3 border btn-danger rounded btn-lg"
        >
          ~
        </Button>
        <Button
          onClick={props.shiftRight}
          className="btn m-2 mx-3 border btn-danger rounded btn-lg"
        >
          &gt;
        </Button>
      </ButtonGroup>
    </div>
  );
}

class GameBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container bg-secondary w-75 border rounded p-3 mt-4">
        <Byte byte={this.props.byte} />
        <hr />
        <Keypad
          complement={this.props.complement}
          shiftLeft={this.props.shiftLeft}
          shiftRight={this.props.shiftRight}
        />
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      byte: [false, false, false, false, false, false, false, false],
    };

    this.complement = this.complement.bind(this);
    this.shiftLeft = this.shiftLeft.bind(this);
    this.shiftRight = this.shiftRight.bind(this);
  }

  complement() {
    this.setState((currentState) => {
      return {
        byte: currentState.byte.map((bit) => !bit),
      };
    });
  }

  shiftLeft() {
    this.setState((currentState) => {
      return {
        byte: [false].concat(currentState.byte.slice(0, -1)),
      };
    });
  }

  shiftRight() {
    this.setState((currentState) => {
      return {
        byte: currentState.byte.slice(1).concat(false),
      };
    });
  }

  getNumber() {
    const byte = this.state.byte;
    let num = 0
    for (let i= 0; i<8; i++) {
      num += byte[i]<<i
    }
    return num
  }

  

  render() {
    const number = this.getNumber()
    const hex = number.toString(16)
    const ascii = String.fromCharCode(hex)
    return (
      <div className="container">
        <div className="bg-secondary border container-flex d-flex flex-row justify-content-around rounded-pill m-2">
          <GameSpace 
            number={number}
            hex={hex}
            ascii={ascii}
          />
        </div>
        <GameBoard
          byte={this.state.byte}
          complement={this.complement}
          shiftLeft={this.shiftLeft}
          shiftRight={this.shiftRight}
        />
      </div>
    );
  }
}

export default App;
