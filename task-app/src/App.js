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
                editing: false,
                editText: "",
            },
            tasks: [],
        };

        this.onClickRemove = this.onClickRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.applyEdit = this.applyEdit.bind(this);
    }

    // When text is changed in the input field, update the state of the current task
    handleChange = (e) => {
        this.setState({
            task: {
                text: e.target.value,
                id: this.state.task.id,
                editing: false,
                editText: "",
            },
        });
    };

    // When Add Task button is clicked, add this task to the list of tasks
    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: { text: "", id: uniqid(), editing: false, editText: "" },
        });
    };

    // When we aren't editing a field and we click "x", remove the task from the list
    onClickRemove = (e) => {
        this.setState({
            tasks: this.state.tasks.filter((task) => {
                return task.id !== e.target.dataset.id;
            }),
            task: { text: "", id: uniqid(), editing: false, editText: "" },
        });
    };

    // When we click edit, change the task's editing status to true
    // If editing is already set to true, when we click the checkmark, we swap the
    toggleEdit = (e) => {
        let newTasks = [];
        this.state.tasks.forEach((task) => {
            if (task.id === e.target.dataset.id) {
                newTasks.push({
                    text: task.text,
                    id: task.id,
                    editing: !task.editing,
                    editText: "",
                });
            } else {
                newTasks.push(task);
            }

            return newTasks;
        });

        this.setState({
            tasks: newTasks,
        });
    };

    // update state as we type into the edit input field
    onEdit = (e) => {
        let newTasks = [];
        this.state.tasks.forEach((task) => {
            if (task.id === e.target.dataset.id) {
                newTasks.push({
                    text: task.text,
                    id: task.id,
                    editing: task.editing,
                    editText: e.target.value,
                });
            } else {
                newTasks.push(task);
            }

            return newTasks;
        });

        this.setState({
            tasks: newTasks,
        });
    };

    applyEdit = (e) => {
        let newTasks = [];

        this.state.tasks.forEach((task) => {
            if (task.id === e.target.dataset.id) {
                newTasks.push({
                    text: task.editText,
                    id: task.id,
                    editing: !task.editing,
                    editText: "",
                });
            } else {
                newTasks.push(task);
            }

            return newTasks;
        });

        this.setState({
            tasks: newTasks,
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
                <Overview
                    tasks={tasks}
                    remove={this.onClickRemove}
                    toggleEdit={this.toggleEdit}
                    onEdit={this.onEdit}
                    applyEdit={this.applyEdit}
                />
            </div>
        );
    }
}

export default App;
