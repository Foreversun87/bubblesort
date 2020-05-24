import React from "react";
import "./scheibe_style.css";

export default class Scheibe extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={`hanoi-scheibe${this.props.value} ${this.props.direction} `}></div >
        )
    }
}