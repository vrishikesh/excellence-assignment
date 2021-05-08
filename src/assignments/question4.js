import * as React from 'react';

export default function Q4() {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  const [value, setValue] = React.useState({});

  React.useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(j => setValue(j))
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Post Id: {value.id}</p>
        <p>Title: {value.title}</p>
        <p>Body: {value.body}</p>
      </header>
    </div>
  );
}
