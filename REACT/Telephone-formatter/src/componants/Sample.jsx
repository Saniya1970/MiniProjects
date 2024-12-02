import React, { useState } from 'react'

export default function Sample() {
    const [number, setNumber] = useState('')

    const formatted = (input) => {
        const cleaned = input.replace(/\D/g, "")

        const part1 = cleaned.slice(0, 3)
        const part2 = cleaned.slice(3)

        if (part1.length > 0) {
            return `+(${part1})${part2 ? `-${part2}` : " "}`
        }
        return input
    }

    const handleChange = (e) => {
        const input = e.target.value
        const formateInput = formatted(input)
        setNumber(formateInput)
    }

    const clearInput = () => {
        setNumber('')
    }

    return (
        <div>
            <label>Enter number:</label>
            <input
                type="text"
                value={number}
                onChange={handleChange} />
            <button onClick={clearInput}>clear</button>
        </div>
    )
}
