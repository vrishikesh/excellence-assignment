import * as React from 'react';

export default function Q3() {
  const length = 10;
  const consecutiveIntegers = Array.from(new Array(length).keys());
  const index = Math.floor(Math.random() * length);
  consecutiveIntegers.splice(index, 0, consecutiveIntegers[index]);
  let pos = 0;

  for (let i = 0, len = consecutiveIntegers.length - 1; i < len; i++) {
    if (consecutiveIntegers[i] === consecutiveIntegers[i + 1]) {
      pos = i;
      break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Consecutive Numbers: {consecutiveIntegers.join(', ')}</p>
        <p>Repeated Number: {consecutiveIntegers[pos]}</p>
      </header>
    </div>
  );
}
