import React, { useState, useEffect } from 'react';
import Box from './Box';

export default function Row({ id }) {
  const boxes = [];
  for (let i = 0; i < 3; i++) {
    boxes.push(<Box key={id * 3 + i} />);
  }
  return <div>{boxes}</div>;
}
