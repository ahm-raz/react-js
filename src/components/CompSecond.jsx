import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/Context'
const CompSecond = () => {
    const counterValue = useContext(CounterContext);
  return (
    <div>
        <h1>Second Component</h1>
        <button onClick={() => counterValue.setCount(counterValue.count + 1)}>Increment</button>
        <button onClick={() => counterValue.setCount(counterValue.count - 1)}>Decrement</button>
    </div>
  )
}

export default CompSecond