import React from 'react'
import CompFirst from './components/CompFirst'
import CompSecond from './components/CompSecond'
import CompThird from './components/CompThird'
import CompForth from './components/CompForth'
import { useContext } from 'react'
import { CounterContext } from './context/Context'
const App = () => {
  const counterValue = useContext(CounterContext);

  return (
    <div>
      <h1>Count is {counterValue.count}</h1>
      <CompFirst />
      <CompSecond />
      <CompThird />
      <CompForth />
    </div>
  )
}

export default App