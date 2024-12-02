import React, { useState } from 'react';

function Render() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };
    // Logs on every re-render

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
export default Render