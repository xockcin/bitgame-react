import React, { Component } from 'react'
import GameSpace from './components/GameSpace'
import GameBoard from './components/GameBoard'
import BandcampPlayer from 'react-bandcamp'



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

  getAscii(num) {
    const special = [
      "NUL",
      "SOH",
      "STX",
      "ETX",
      "EOT",
      "ENQ",
      "ACK",
      "BEL",
      "BS",
      "TAB",
      "LF",
      "VT",
      "FF",
      "CR",
      "SO",
      "SI",
      "DLE",
      "DC1",
      "DC2",
      "DC3",
      "DC4",
      "NAK",
      "SYN",
      "ETB",
      "CAN",
      "EM",
      "SUB",
      "ESC",
      "FS",
      "GS",
      "RS",
      "US",
      "SP"
    ]

    if (num < 33) {
      return special[num]
    } 
    else if (num === 127) {
      return "DEL"
    }
    else {
      return String.fromCharCode(num)
    }
  }

  render() {
    const number = this.getNumber()
    const hex = number.toString(16)
    const ascii = this.getAscii(number)
    return (
      <div className="container">
        <div className=" border container-flex d-flex flex-row justify-content-around rounded-pill m-2">
          <GameSpace number={number} hex={hex} ascii={ascii} />
        </div>
        <GameBoard
          byte={this.state.byte}
          complement={this.complement}
          shiftLeft={this.shiftLeft}
          shiftRight={this.shiftRight}
        />
        <hr />
        <div className="container-flex d-flex justify-content-center p-3">
          <BandcampPlayer
            className="rounded-pill"
            album="3114440086"
            bgcol="blue"
            size="medium"
            width="50%"
          />
        </div>
      </div>
    );
  }
}

export default App;
