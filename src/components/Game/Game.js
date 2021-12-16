import React from "react";
import Board from "../Board/Board";

export default class Game extends React.Component {
    state = {
        knightPosition: [0, 0]
    }

    moveKnight = (toX, toY) => {
        this.setState({ knightPosition: [toX, toY] });
    }

    render() {
        return (
            <div style={{ border: '1px solid black', height: '500px', width: '500px' }}>
                <Board moveKnight={this.moveKnight} knightPosition={this.state.knightPosition} />
            </div>
        );
    }
}