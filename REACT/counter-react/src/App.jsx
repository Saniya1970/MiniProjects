import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  return (
    <>
      <div className='main'>
        <nav className="navbar">
          <h1 className="heading">Counter</h1>
        </nav>

        <div className="counter">
          <p className="value">{count}</p>

          <div className="btn">
            <button className="btn1" onClick={increment}>➕</button>
            <button className="btn1" onClick={decrement} >➖</button>
          </div>

          <div className="input">
            <label htmlFor="input">Increment/Decrement by :</label>
            <input
              type="number"
              className="changeBy"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))} />
          </div>

          <button onClick={reset} className="resetbtn">Reset</button>


        </div>
      </div>
    </>
  )
}


