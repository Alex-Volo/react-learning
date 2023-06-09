import React from "react";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 5,
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({ value: this.state.value + 1 });
    }

    decrement() {
        this.setState({ value: this.state.value - 1 });
    }

    render() {
        return (
            <>
                <h1>{this.state.value}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrtment</button>
            </>
        );
    }
}

export default ClassCounter;
