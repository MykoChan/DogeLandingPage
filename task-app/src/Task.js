import React, { Component } from "react";
import CloseIcon from "./CloseIcon";

class Task extends Component {
    render() {
        const { task, removeFunction } = this.props;
        return (
            <div className="task-container">
                <div className="task">{task.text}</div>
                <CloseIcon task={task} removeFunction={removeFunction} />
            </div>
        );
    }
}

export default Task;
