import React from "react";
import Board from "../Board/Board";

class Game extends React.Component {
    render() {
        return (
            <div style={{ border: '1px solid black', height: '500px', width: '500px' }}>
                <Board />
            </div>
        );
    }
}

export default Game;