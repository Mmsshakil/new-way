"use client"

import { useState } from "react";

const Counter = () => {
    const [counters, setCounters] = useState(0);
    return (
        <div>
            <h1>Counter: {counters}</h1>
            <button className="btn btn-warning" onClick={() => setCounters(counters + 1)}>Increase</button>
            <button className="btn btn-info" onClick={() => setCounters(counters - 1)}>Decrease</button>
        </div>
    );
};

export default Counter;