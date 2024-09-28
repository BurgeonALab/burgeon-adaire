import React, { useState, Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <h1>PT. Burgeon Adaire International</h1>
      <Counter />
    </Fragment>
  );
};

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked me {count} times
    </button>
  );
}


export default App;