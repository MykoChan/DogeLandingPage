import { Component } from "react";
import CloseLogo from "./img/xmark.png";

class CloseButton extends Component {
    render() {
        const { task, remove, toggleEdit } = this.props;
        return (
            <img
                className="x-logo"
                src={CloseLogo}
                alt=""
                data-id={task.id}
                onClick={task.editing ? toggleEdit : remove}
            />
        );
    }
}

export default CloseButton;
