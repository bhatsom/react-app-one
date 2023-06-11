import { useState, useEffect } from 'react';

export const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const expensiveFunction = () => {
    // do some expensive computation here
    console.log("Running the expensive calc");
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Increment count</button>
      </div>
      <div/>
      <div>
        {count} inside ParentComponent
      </div>
      <div/>
      <div>
        <ChildComponent expensiveFunction={expensiveFunction} />
      </div>
    </div>
  );
}
  
const ChildComponent = ({ expensiveFunction }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    expensiveFunction();
  }, [expensiveFunction]);

  return <div>{value} inside ChildComponent</div>;
}