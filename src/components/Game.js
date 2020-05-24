import React, { Component } from 'react';
import Board from './Board';
import Reset from './Reset';
import ScoreBoard from './ScoreBoard'

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Array(9).fill(null),
            toggle: true,
            // list for every square
            style: new Array(9).fill({backgroundColor: 'lightgray'}),
            // player scores [0] for 'x', [1] for 'o'
            scores: new Array(2).fill(0)
        }
    }

    onClick(i) {
        const board = this.state.board;
        if (board[i] || this.isWinner(board)) { //square already filled, do nothing
            return;
        }

        board[i] = this.state.toggle? 'x' : 'o';
        const winner = this.isWinner(board);
        if (winner) {
            // add score using winner index
            this.addScore(board[winner[0]]);
            // change winning square colors
            const style = new Array(9).fill({backgroundColor: 'lightgray'});
            for (var j=0; j<3; j++)
                style[winner[j]] = {backgroundColor: 'red'};
            this.setState({
                style: style
            })
            return;
        }

        this.setState({
            toggle: !this.state.toggle
        })
    }

    addScore(winner) {
        const scores = this.state.scores;
        if (winner === 'x') {
            this.setState({
                scores: [scores[0]+1, scores[1]]
            });
        } else {
            this.setState({
                scores: [scores[0], scores[1]+1]
            });
        }
    }

    isWinner(board) {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (var i=0;i<winConditions.length; i++) {
            const [a,b,c] = winConditions[i];
            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                return [a, b, c];
            }
        }
        return null;
    }

    // Reset Button
    resetBoard() {
        this.setState({
            board: new Array(9).fill(null),
            toggle: true,
            style: new Array(9).fill({backgroundColor: 'lightgray'})
        })
    }

    // ScoreBoard

    render() {
        return (
            <div className='game'>
                <div className='board'>
                    <Board 
                        squares={this.state.board} 
                        onClick={(i) => this.onClick(i)}
                        style = {this.state.style}
                    />
                    <ScoreBoard score={this.state.scores}/>
                </div>
                <div className="reset-button">
                    <Reset onClick={() => this.resetBoard()}/>
                </div>
            </div>
        )
    }


}

