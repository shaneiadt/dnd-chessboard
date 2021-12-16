import React from 'react';
import Knight from '../Knight/Knight';
import Square from '../Square/Square';
import { moveKnight } from '../../Game';

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null

  return (
    <div onClick={() => handleSquareClick(x, y)} key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <Square black={black}>{piece}</Square>
    </div>
  )
}

function handleSquareClick(toX, toY) {
  moveKnight(toX, toY)
}

export default function Board({ knightPosition }) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
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
  )
}