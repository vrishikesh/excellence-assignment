import * as React from 'react';

export default function Q2() {
  const num = '00110001001110';
  // const num = '100010001';
  // const num = '00111111001111001';

  let current = 0, prev = 0;
  for (let i = 0, len = num.length; i < len; i++) {
    if (num[i] === '1') {
      current++;
    }

    if (num[i] === '0') {
      if (current > prev) {
        prev = current;
      }

      current = 0;
    }
  }

  const con = Math.max(current, prev);

  return (
    <div className="App">
      <header className="App-header">
        <p>Number: {num}</p>
        <p>Consecutive 1's: {con}</p>
      </header>
    </div>
  );
}
