import React from 'react'
import Items from './components/Items'
import Cart from './components/Cart'
const App = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <Items name="Macbook" price="1000" />
        <Items name="iPhone" price="1000" />
        <Items name="iPad" price="1000" />
        <Items name="iPod" price="1000" />
        <Items name="iMac" price="1000" />
        <Items name="iMac" price="1000" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Cart />
      </div>
    </div>
  )
}

export default App