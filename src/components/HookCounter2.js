import React, { useState } from 'react';

function HookCounter2() {
   const initialState = 0;
   const [count, setCount] = useState(initialState);
  return(
    <div>
     Count: {count}
     <br/>
     <button onClick={() => setCount(initialState)}>Reset</button>
     <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
     <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
    </div>
  )
}

export default HookCounter2;


//USE STATE WITH PREVIOUS STATE
