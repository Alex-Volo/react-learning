import React from "react";
import Like from "./components/Like";
import Counter from "./components/Counter";
import Input from "./components/Input";
import ClassCounter from "./components/ClassCounter";

function App() {
    console.log(ClassCounter);
    return (
        <div>
            Работает
            <Like />
            <Counter />
            <Input />
            <ClassCounter />
        </div>
    );
}

export default App;
