import './index.css'
import React, { useState } from 'react'
import Component from './component'

const App = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(true)
  const [value, setValue] = useState('5 Birthday Today')
  const handleClick = () => {
    setIsSectionVisible(false)
    setValue('0 Birthday Today')
  }
  return (
    <>
      <main>
        <section className="container">
          <h3>{value}</h3>
          {isSectionVisible && <Component />}
          <div className="wrapper">
            <button onClick={handleClick}>Clear All</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
