import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
    renderSquare(i) {
        return (
            <Square 
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                style={this.props.style[i]}
            />
        )
    }

    render() {
        return (
            <div>
                <table>
                    <tr className="row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </tr>
                    <tr className="row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </tr>
                    <tr className="row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </tr>
                </table>
            </div>
        )
    }

}