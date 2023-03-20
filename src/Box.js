import React, { useState, useEffect, useCallback } from 'react';

export default function Box({ changeTurn }) {
  // create state variable to store box's character
  const [char, setChar] = useState('-');
  const handleClick = () => {
    if (char === '-') {
      setChar(changeTurn);
    }
  };
  return (
    <button className="box" onClick={() => handleClick()}>
      {char}
    </button>
  );
}

// store invocation of setInterval
// const change = setInterval(() => {
//   if (char === 'X') setChar('O');
//   else setChar('X');
// }, 500);
// create callback labeled clear that, when invoked, invokes clearInterval
// const clear = () => clearInterval(change);
// useEffect is equivalent to componentDidUpdate, only runs after re-render
// pass in callback that returns clear
// have useEffect watch for char state change
// useEffect(() => clear, [char]);
