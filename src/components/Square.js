import React from 'react';

// Returns a Square object to represent a square on a tic-tac-toe board
export default function Square(props) {
    return (
        <button className="square" onClick={props.onClick} style={props.style}>
            {props.value}
        </button>
    )
}