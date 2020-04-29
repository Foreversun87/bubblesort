import React, { Component } from 'react';
import './Stab.css';

class Stab extends Component {

    static defaultProps = {
        // allColors: ["purple", "magenta", "violet", "pink", "green", "#7171ff", "#c0ffd6", "#ff8c8c"]
        // allColors: ["white"]
    };

    constructor(props) {
        super(props);
        // this.state = {
        //     color: choice(this.props.allColors)
        // };
    }

    render() {
        return (
            <div
                className={`stab  ${this.props.className}`}
                style={{
                    // backgroundColor: this.state.color,
                    height: this.props.wert * 1.5,
                }}
                onAnimationStart={() => console.log("OnAnimationFire")}>
                <span>{this.props.wert}</span>
            </div>

        )
    }
}

export default Stab;