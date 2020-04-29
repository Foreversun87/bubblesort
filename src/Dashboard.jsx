import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import "./Dashboard-style.css";
import { bubbleSort, ranValues, sound } from "./helpers";


export default class Dashboard extends React.Component {
    static defaultProps = {
        // allWerts: bubbleSort(ranValues(200)),
        allWerts: bubbleSort([26, 85, 70, 28, 63, 57, 98, 53, 10, 3]),
        // allWerts: bubbleSort([1, 2, 3, 4, 5, 26, 85, 85, 70, 28, 63, 57, 98, 53, 10, 1, 6, 3, 9, 12]),
        // allWerts: bubbleSort([51, 26, 50, 70, 40]),
        // allWerts: [[50,30], [30,50]],
        // counter: 0
    };
    
    constructor(props) {
        super(props);
        this.state = {
            completed: false,
            aktBoardOne: this.props.allWerts[0],
            counter: 1
        };
        this.handleClick = this.handleClick.bind(this);
        // this.onFinishing = this.onFinishing.bind(this);
    }

    checkCounter() {
        if (this.state.counter >= this.props.allWerts.length) {
            this.setState(
                { completed: true }
            );
        }
    }

    thomasChangeFunction = (aktBoardOne) => {
        // console.log("aktBoardOne ", aktBoardOne);
        // console.log("aktBoardOneNExtNext ", this.props.allWerts[this.state.counter]);
        let tausch = [];
        let forTrue = true;
        // console.log(this.state.counter);
        // console.log(this.props.allWerts.length);
        for (let i = 0; i < aktBoardOne.length; i++) {
            if (forTrue) {
                //Die Abfrage muss sein, weil sonst in allWerts[] ein Wert größer als Größe eingegeben wird
                if (this.state.counter < this.props.allWerts.length) {
                    // Ist der Wert an Stelle i aus aktuellen Board nicht gleich wie das nexte nexte aktuelle Board an der Stelle i 
                    if (aktBoardOne[i] !== this.props.allWerts[this.state.counter][i]) {
                        // console.log(aktBoardOne[i]);
                        forTrue = false;
                        tausch.push(aktBoardOne[i], aktBoardOne[i + 1]);
                    }
                }
            }
        }
        return tausch;
    }

    onFinishing() {
        for (let index = 0; index <= this.props.allWerts.length; index++) {
            this.setState({
                aktBoardOne: this.props.allWerts[this.state.counter],
                // aktBoardOne: this.props.allWerts[this.state.counter],
                counter: this.state.counter + 1
            });
            this.checkCounter();
        }
    }


    handleClick(evt) {
        setInterval(() => {
            if (this.state.counter < this.props.allWerts.length) {
                this.setState({
                    aktBoardOne: this.props.allWerts[this.state.counter],
                    counter: this.state.counter + 1,
                });
                this.checkCounter();
            } else {
                clearInterval();
            }
        }, 1500);
    }

    render() {
        return (
            <div className="dashboard">
                <Sidebar handleClick={this.handleClick} />
                <Main aktBoardOne={this.state.aktBoardOne} thomasChangeFunction={this.thomasChangeFunction} />
            </div>
        )
    }
}