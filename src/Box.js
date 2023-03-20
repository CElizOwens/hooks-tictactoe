import React, { useState, useEffect, useCallback } from 'react';

export default function Box() {
  const [char, setChar] = useState('-');

  return <button className="box">{char}</button>;
}
