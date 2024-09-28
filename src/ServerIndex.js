import React, { useState, Fragment } from 'react';

const ServerIndex = () => {
  return (
    <Fragment>
      <h1>Hello from Server-Side Rendered React App!</h1>
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


export default ServerIndex;