import React, { Component } from 'react'
import { Button, ButtonGroup} from 'reactstrap'

const Byte = (props) => {
  const buttons = props.byte
    .slice(0)
    .reverse()
    .map((bit, index) => {
      return (
        <Button
          className="bit btn btn-lg m-3 border border-dark rounded"
          color={bit ? "dark" : "light"}
        >
          {7-index}
        </Button>
      );
    });

  return (
    <div className="d-flex bg-info rounded-pill justify-content-around">
      <ButtonGroup>{buttons}</ButtonGroup>
    </div>
  );
};

const Keypad = (props) => {
  return (
    <div className="d-flex bg-success rounded-pill justify-content-around">
      <ButtonGroup>
        <Button
          onClick={props.shiftLeft}
          className="btn m-2 mx-5 border btn-danger rounded btn-lg"
        >
          &lt;
        </Button>
        <Button
          onClick={props.complement}
          className="btn m-2 mx-5 border btn-danger rounded btn-lg"
        >
          ~
        </Button>
        <Button
          onClick={props.shiftRight}
          className="btn m-2 mx-5 border btn-danger rounded btn-lg"
        >
          &gt;
        </Button>
      </ButtonGroup>
    </div>
  );
}

const GameBoard = (props) => {
  return (
    <div class="container w-75 border rounded p-3 mt-4">
      <Byte byte={props.byte} />
      <hr />
      <Keypad
        complement={props.complement}
        shiftLeft={props.shiftLeft}
        shiftRight={props.shiftRight}
      />
    </div>
  );
};

export default GameBoard;