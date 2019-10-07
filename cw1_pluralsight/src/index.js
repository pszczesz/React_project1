import React, { useState } from 'react';

import ReactDOM from 'react-dom';

// function Button(){
//     const [counter,setCounter] = useState(0);
//     return <button>{Math.random()}</button>;
// }

function Button() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }



ReactDOM.render(
    <Button />,
    document.getElementById('root'),
)
