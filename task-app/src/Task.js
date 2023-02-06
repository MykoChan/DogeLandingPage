import React, { Component } from "react";
import CloseButton from "./CloseButton";
import EditButton from "./EditButton";
import EditInput from "./EditInput";

class Task extends Component {
    render() {
        const { task, remove, toggleEdit, onEdit, applyEdit } = this.props;
        return (
            <div className="task-container">
                {task.editing ? (
                    <EditInput task={task} onEdit={onEdit} />
                ) : (
                    <div className="task">{task.text}</div>
                )}
                <div className="icons">
                    <EditButton
                        task={task}
                        toggleEdit={toggleEdit}
                        applyEdit={applyEdit}
                    />
                    <CloseButton
                        task={task}
                        remove={remove}
                        toggleEdit={toggleEdit}
                    />
                </div>
            </div>
        );
    }
}

export default Task;
