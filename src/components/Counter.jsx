import { useState } from "react";
import classes from "./Counter.module.css";

const Counter = () => {
    const [value, setValue] = useState(5);

    function increment() {
        setValue(value + 1);
    }
    function decrement() {
        setValue(value - 1);
    }

    return (
        <>
            <h1 className={classes.heading}>{value}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrtment</button>
        </>
    );
};

export default Counter