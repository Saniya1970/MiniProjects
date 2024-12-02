import React, { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => setCount(count + value);
    const decrement = () => setCount(count - value);
    const reset = () => setCount(0);

    return (
        <>
            <div className='count'>
                <div className="value">{count}</div>
                <div className='btn' >
                    <button className='btn1' onClick={increment}>➕</button>
                    <button className='btn1' onClick={decrement}>➖</button>
                </div>

                <div className='input'>
                    <label htmlFor="input">Increment/Decrement by: </label>
                    <input
                        type="number"
                        value={step}
                        onChange={(e) => setStep(Number(e.target.value))} />
                </div>

                <button className="btn1" onClick={reset}>Reset</button>
            </div>

        </>
    )
}
