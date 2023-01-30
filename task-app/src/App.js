import React, { Component } from "react";
import "./App.css";
import Overview from "./Overview";
import uniqid from "uniqid";

class App extends Component {
    constructor() {
        super();

        this.state = {
            task: {
                text: "",
                id: uniqid(),
            },
            tasks: [],
        };
    }

    handleChange = (e) => {
        this.setState({
            task: {
                text: e.target.value,
                id: this.state.task.id,
            },
        });
    };

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: { text: "", id: uniqid() },
        });
    };

    render() {
        const { task, tasks } = this.state;
        return (
            <div className="App">
                <form onSubmit={this.onSubmitTask}>
                    <div>
                        <label htmlFor="taskInput">Enter task</label>
                    </div>
                    <div>
                        <input
                            onChange={this.handleChange}
                            value={task.text}
                            type="text"
                            id="taskInput"
                        />
                        <button type="submit"> Add Task </button>
                    </div>
                </form>
                <Overview tasks={tasks} />
            </div>
        );
    }
}

export default App;
