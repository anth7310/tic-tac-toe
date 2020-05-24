import React, { Component } from 'react';
import Board from './Board';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Array(9).fill(null),
            toggle: true,
            // list for every square
            style: new Array(9).fill({backgroundColor: 'lightgray'})
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

    render() {
        return (
            <div className='game'>
                <div className='board'>
                    <Board 
                        squares={this.state.board} 
                        onClick={(i) => this.onClick(i)}
                        style = {this.state.style}
                    />
                </div>
            </div>
        )
    }


}

