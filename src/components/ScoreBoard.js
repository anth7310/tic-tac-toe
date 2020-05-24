import React from 'react';

export default function ScoreBoard(props) {
    return (
        <div className="score-board">
            <table>
                <tbody>
                    <tr>
                        <th id="x-score">
                            x: {props.score[0]}
                        </th>
                    </tr>
                    <tr>
                        <th id="o-score">
                            o: {props.score[1]}
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}