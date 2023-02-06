import React, { Component } from "react";
import "./Overview.css";
import Task from "./Task";

class Overview extends Component {
    render() {
        const { tasks, remove, toggleEdit, onEdit, applyEdit } = this.props;
        return (
            <div className="overview-container">
                {tasks.map((task) => {
                    return (
                        <Task
                            key={task.id}
                            task={task}
                            remove={remove}
                            toggleEdit={toggleEdit}
                            onEdit={onEdit}
                            applyEdit={applyEdit}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Overview;
