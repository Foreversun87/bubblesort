import React from "react";
import Bobosortcontainer from "./components/bobosort/Bobosortcontainer";
import Bubblesortcontainer from "./components/bubblesort/Bubblesortcontainer";
import Hanoicontainer from "./components/hanoi/Hanoicontainer";
import KeinSort from "./components/keinsort/KeinSort";
import Tacho from "./components/tacho/Tacho";
import { BubblesortContext } from "./components/bubblesort/BubblesortContext";

export default class SelectForm extends React.Component {
    static contextType = BubblesortContext;
    constructor(props) {
        super(props);
        this.state = {
            title: "null",
            algorithmus1: {
                step: null,
                counter: null
            }
            
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
        if (event.target.value === "null") {
            this.context.setCompleted(this.props.number);
        }
    }

    setStepsCounter = (counter, step, number) => {
        if (number === 1) {
            console.log("Hier eine Endlosschleife");
            this.setState({
                    algorithmus1:{
                        step: step,
                        counter: counter
                    }}
            );
        }
    }

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
                    <Tacho />
                </div>
                {this.state.title === "bobo" ? <Bobosortcontainer number={this.props.number} setStepsCounter={this.setStepsCounter} />
                    : this.state.title === "bubble" ? <Bubblesortcontainer number={this.props.number} setCounterSteps={this.setStepsCounter} />
                        : this.state.title === "hanoi" ? <Hanoicontainer number={this.props.number} setCounterSteps={this.setStepsCounter} />
                            : this.state.title === "null" ? <KeinSort number={this.props.number} /> : null}
            </div>
        )
    }
}