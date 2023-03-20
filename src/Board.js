import React, { useState, useEffect } from 'react';
import Row from './Row';

export default function Board() {
  const rows = [];
  for (let i = 0; i < 3; i++) {
    rows.push(<Row key={i} id={i} />);
  }
  return <div>{rows}</div>;
}
