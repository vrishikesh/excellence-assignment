import * as React from 'react';

export default function Q1() {
  const length = 10;
  const randomIntegers = Array.from({length: length}, () => Math.floor(Math.random() * length));

  return (
    <div className="App">
      <header className="App-header">
        <p>Random Array: {randomIntegers.join(', ')}</p>
        <p>Even Array: {randomIntegers.filter((x) => x % 2 === 0).join(', ')}</p>
      </header>
    </div>
  );
}
