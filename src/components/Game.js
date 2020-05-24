import React, { Component } from 'react';
import Board from './Board';
import Reset from './Reset';
import ScoreBoard from './ScoreBoard';
import DisplayResult from './DisplayResult';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Array(9).fill(null),
            toggle: true,
            // list for every square
            style: new Array(9).fill({backgroundColor: 'lightgray'}),
            // player scores [0] for 'x', [1] for 'o'
            scores: new Array(2).fill(0),
            result: null //x wins, o wins, or tie
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
                // display winner
                result: board[winner[0]],
                // change squares to winner
                style: style
            })
            return;
        }

        if (this.isBoardFull(board)) { // tie game
            this.setState({
                result: 'tie'
            })
        }

        this.setState({
            toggle: !this.state.toggle
        })
    }

    isBoardFull(board) {
        // Return true if board is filled
        return !Boolean(board.filter((square) => square === null).length)

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
            result: null,
            style: new Array(9).fill({backgroundColor: 'lightgray'})
        })
    }

    // ScoreBoard

    render() {
        return (
            <div className='game'>
                <DisplayResult value={this.state.result}/>
                <div className='board'>
                    <Board 
                        squares={this.state.board} 
                        onClick={(i) => this.onClick(i)}
                        style = {this.state.style}
                    />
                    <Reset onClick={() => this.resetBoard()}/>
                    <ScoreBoard score={this.state.scores}/>
                </div>
            </div>
        )
    }


}

