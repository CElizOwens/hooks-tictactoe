import React, { useState, useEffect } from 'react';
import Box from './Box';

export default function Row({ id, changeTurn }) {
  const boxes = [];
  for (let i = 0; i < 3; i++) {
    boxes.push(<Box changeTurn={changeTurn} key={id * 3 + i} />);
  }
  return <div className="row">{boxes}</div>;
}
