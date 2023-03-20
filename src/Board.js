import React, { useState, useEffect } from 'react';
import Row from './Row';

export default function Board() {
  const [turn, setTurn] = useState('X');
  const changeTurn = () => {
    if (turn === 'X') setTurn('O');
    else setTurn('X');
    return turn;
  };
  const rows = [];
  for (let i = 0; i < 3; i++) {
    rows.push(<Row changeTurn={changeTurn} key={i} id={i} />);
  }
  return <div className="board">{rows}</div>;
}
