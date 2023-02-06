import { Component } from "react";

class EditInput extends Component {
    render() {
        const { task, onEdit } = this.props;
        return (
            <input
                type="text"
                className="edit-input"
                onChange={onEdit}
                data-id={task.id}
            />
        );
    }
}

export default EditInput;
