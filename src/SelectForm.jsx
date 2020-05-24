import React from "react";
import Bobosortcontainer from "./components/bobosort/Bobosortcontainer";
import Bubblesortcontainer from "./components/bubblesort/Bubblesortcontainer";
import Hanoicontainer from "./components/hanoi/Hanoicontainer";
import KeinSort from "./components/keinsort/KeinSort";
import { BubblesortContext } from "./components/bubblesort/BubblesortContext";

export default class SelectForm extends React.Component {
    static contextType = BubblesortContext;
    constructor(props) {
        super(props);
        this.state = {
            title: "null"
            // steps: 0,
            // counter: 0
        }

    }
    handleSelect = (event) => {
        event.preventDefault();
        console.log("Hello", event.target.value);
        this.setState(
            {
                title: event.target.value
            }
        )
        if (event.target.value === "null"){
            this.context.setCompleted(this.props.number);
        }
    }

    // setStepsCounter = (counter, step) =>{
    //     this.setState({
    //         steps: step,
    //         counter: counter
    //     })
    // }

    render() {
        return (
            <div className="container">
                <div className="chooser">
                    <form action="">
                        <label htmlFor="sort">Choose a Sort:</label>
                        <select value={this.state.title} onChange={this.handleSelect} name="sort" id="sort">
                            <option value="null">Keine Auswahl</option>
                            <option value="bobo">Bobosort</option>
                            <option value="bubble">Bubblesort</option>
                            <option value="hanoi">Türme von Hanoi</option>
                        </select>
                    </form>
                    <div className="progressbar">
                        {this.state.counter > 0 ? <h1 style={{ color: "white" }}>{Math.floor(this.state.counter / this.state.steps * 100)}%</h1> : null}
                    </div>

                </div>
                {this.state.title === "bobo" ? <Bobosortcontainer number={this.props.number} />
                    : this.state.title === "bubble" ? <Bubblesortcontainer number={this.props.number} /> 
                    : this.state.title === "hanoi" ? <Hanoicontainer number={this.props.number} />
                    : this.state.title === "null" ? <KeinSort number={this.props.number}  /> : null}
            </div>
        )
    }
}