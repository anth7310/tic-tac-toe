import React from 'react';

// Returns a Square object to represent a square on a tic-tac-toe board
export default function Square(props) {
    const squareStyle = {
        backgroundColor: props.style.backgroundColor,
        border: 'solid',
        width: '100px',
        height: '100px',
        fontSize: '50px',
    }

    return (
        <th 
            className="square" 
            onClick={props.onClick}
            style={squareStyle}>

            {props.value}
        </th>
    )
}



// const squareStyle = {
//     border: 'solid',
//     width: '100px',
//     height: '100px',
//     fontSize: '50px',
//     padding: '0px',
//     margin: '0px',
// }
