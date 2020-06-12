import React from "react";
import bogosort from "./boboSort.js";
import Stab from "../stab/Stab";
import "./Bobosortcontainer.css";
import { BubblesortContext } from "../bubblesort/BubblesortContext";
import {ranValues} from "../../helpers";

export default class Bobosortcontainer extends React.Component {
    static contextType = BubblesortContext;
    constructor(props) {
        super(props);
        this.state = {
            aktBoard: [],
            counter: 0,
            setIntervalFn: "",
            completed: false,
            steps: 0
        }
        this.allWerts = bogosort(ranValues(6));
    }

    changeBoard = () => {
        // this.props.setStepsCounter(this.state.counter, this.state.steps);
        if (this.state.counter < this.allWerts.length) {
            this.setState({
                aktBoard: this.allWerts[this.state.counter],
                counter: this.state.counter + 1
            });
            
            this.props.setStepsCounter(this.state.counter, this.state.steps, this.props.number);

        } else {
            clearInterval(this.state.setIntervalFn);
            this.setState({
                completed: true
            });
            this.context.setCompleted(this.props.number);
        }
        if (this.state.steps === 0) {
            this.setState({
                steps: this.allWerts.length
            })
        }
    }

    handleClickStart = () => {
        // console.log("handleClickStart", this.context);
        this.setState({
            setIntervalFn: setInterval(this.changeBoard, 0),
        })
    }



    componentDidMount() {
        this.setState({
            aktBoard: this.allWerts[0]
        })
        // if (this.context.start) {
        //     console.log("DidMount BOOBO")
        //     this.handleClickStart();
        // };
    }

    componentWillReceiveProps(prevProps, context) {
        console.log("WillReceiveProps BOBO ENdlos?");
        if (context.reload) {
            this.reload();
            context.handleClickReloadNot();
        }
        if (context.start && this.state.steps === 0) {
            // console.log("WillReceiveProps start")
            this.handleClickStart();
        }
    }

    componentDidUpdate() {
        //  console.log("DIDUPdate BOBO")
    }


    reload = () => {
        // console.log("Ich reloade")
        this.allWerts = bogosort(ranValues(6));
        clearInterval(this.state.setIntervalFn);
        this.setState({
            aktBoard: this.allWerts[0],
            counter: 0,
            setIntervalFn: "",
            completed: false,
            steps: 0
        })
    }

    render() {
        // console.log("Render BOBO")
        let { aktBoard } = this.state;
        const staebe = aktBoard.map((e, y) => {
            return (
                <Stab
                    className="white"
                    wert={aktBoard[y]}
                    key={y}
                />
            )
        }
        );

        return (
            <div className="bobosortContainer">
                <div className="bobosort">
                    {staebe}
                </div>
                <div className="progressbar">
                    {this.state.counter > 0 ? <h1 style={{ color: "white", margin: 0}}>{Math.floor(this.state.counter / this.state.steps * 100)}%</h1> : null}
                </div>
            </div>

        )
    }
}