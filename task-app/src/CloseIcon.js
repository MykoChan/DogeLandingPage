import { Component } from "react";
import Logo from "./img/xmark.png";

class CloseIcon extends Component {
    render() {
        const { task, removeFunction } = this.props;
        return (
            <img
                className="x-logo"
                src={Logo}
                alt=""
                data-remove={task.id}
                onClick={removeFunction}
            />
        );
    }
}

export default CloseIcon;
