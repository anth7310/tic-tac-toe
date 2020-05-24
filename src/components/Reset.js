import React from 'react';

export default function Reset(props) {

    return (
        <button style={resetStyle} onClick={props.onClick}>
            <h1>RESET</h1>
        </button>
    )
}

const resetStyle = {
    border: 'solid',
    height: '100px',
    width: '300px',
    float: 'right'
}