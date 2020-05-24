import React from 'react';

export default function(props) {
    //Displays the result of the game
    let result = "";

    if (props.value === 'x')
        result = "X wins";
    else if (props.value === 'o')
        result = "O wins";
    else if (props.value === 'tie')
        result = "Tie game";
    return (
        <div className='result-game' style={displayResultStyle}>
            {result}
        </div>
    )
    
}

const displayResultStyle = {
    textAlign: 'center',
    fontSize: '25px',
    height: '50px',

}