import { useState } from "react";

const Input = () => {
    const [value, setValue] = useState("Текст в инпуте");
    return (
        <>
            <h1>{value}</h1>
            <input onChange={event => setValue(event.target.value)} type="text" value={value}></input>
        </>
    );
};

export default Input

