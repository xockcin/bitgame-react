import React, { Component } from "react";

const Dec = (props) => {
  return (
    <div className="bg-success text-white border rounded m-4">
      <h1 className="p-1 m-0">{props.number}</h1>
    </div>
  );
};

const Hex = (props) => {
  return (
    <div className="bg-info text-white border rounded m-4">
      <h1 className="p-1 m-0">{props.hex}</h1>
    </div>
  );
};

const Ascii = (props) => {
  return (
    <div className="bg-danger text-white border rounded m-4">
      <h1 className="p-1 m-0">{props.ascii}</h1>
    </div>
  );
};

const GameSpace = (props) => {
  return (
    <div className="d-flex justify-content-around">
      <Dec number={props.number} />
      <Hex hex={props.hex} />
      <Ascii ascii={props.ascii} />
    </div>
  );
};

export default GameSpace;