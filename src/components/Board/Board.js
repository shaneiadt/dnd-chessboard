import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { connect } from "react-redux";

import { moveKnight } from '../../actions';
import Knight from '../Knight/Knight';
import BoardSquare from './BoardSquare';

function renderSquare(i, knightPosition, moveKnight) {
  const x = i % 8;
  const y = Math.floor(i / 8);

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y} moveKnight={moveKnight}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
}

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}

function Board({ knightPosition, moveKnight }) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition, moveKnight))
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          background: 'lightgrey'
        }}
      >
        {squares}
      </div>
    </DndProvider>
  )
}

const mapStateToProps = state => {
  return {
    knightPosition: state.knight
  };
}

export default connect(mapStateToProps, { moveKnight })(Board);