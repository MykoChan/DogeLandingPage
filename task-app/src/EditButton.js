import { Component } from "react";
import EditLogo from "./img/edit.png";
import CheckLogo from "./img/check-mark.png";

class EditButton extends Component {
    render() {
        const { task, toggleEdit, applyEdit } = this.props;
        return (
            <img
                className="edit-logo"
                src={task.editing ? CheckLogo : EditLogo}
                alt=""
                data-id={task.id}
                onClick={task.editing ? applyEdit : toggleEdit}
            />
        );
    }
}

export default EditButton;
