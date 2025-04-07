import React, { useCallback, useState } from "react";

export default function CitySelector() {
  const [count, setCount] = useState(0);

  const handleChange = useCallback(() => {
    
      setCount(count - 1);
    
  });

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleChange}>Decrement</button>
    </div>
  );
}
