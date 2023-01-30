import React, { Component } from "react";
import CloseIcon from "./CloseIcon";

class Task extends Component {
    render() {
        const { task } = this.props;
        return (
            <div className="task-container">
                <div className="task">{task.text}</div>
                <CloseIcon />
            </div>
        );
    }
}

export default Task;
