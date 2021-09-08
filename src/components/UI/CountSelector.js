import { useState } from "react";

export default function CountSelector(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  }

  const decrement = () => {
    if (count === 0) {
        return;
    }
    setCount(prev => prev - 1);
  }

  return (
    <div className="p-4 ">
      <h2 className="font-bold text-sm">{props.title || "Adult"}</h2>
      <p className="text-grayish text-xs">{props.age || "Ages 13 or above"}</p>
      <div className="flex space-x-5 items-center pt-2">
        <button onClick={decrement} className="border-2 px-2 rounded-md">
          -
        </button>
        <p className="font-bold">{count}</p>
        <button onClick={increment}  className="border-2 px-2 rounded-md">
          +
        </button>
      </div>
    </div>
  );
}
