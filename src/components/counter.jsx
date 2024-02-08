import { useState } from "react";
import { Button } from "./button";


const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = (multiplier) => {
    setCount(count + multiplier);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button multiplier={1} onIncrease={handleIncrease} />
      <Button multiplier={2} onIncrease={handleIncrease} />
      <Button multiplier={5} onIncrease={handleIncrease} />
    </div>
  );
};

export default Counter;
