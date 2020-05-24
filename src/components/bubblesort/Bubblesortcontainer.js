import React, { Component } from 'react';
import './Bubblesortcontainer.css';
import Stab from '../stab/Stab';
import { BubblesortContext } from "./BubblesortContext";
import { bubbleSort, ranValues } from "../../helpers";

class Bubblesortcontainer extends Component {
    static contextType = BubblesortContext;
    //***     Verschiedene Testdaten     ***// 
    // static defaultProps = {
    //     allWerts: bubbleSort(ranValues(10))
    // };
    constructor(props) {
        super(props);
        this.state = {
            completed: false,
            // aktBoard: this.props.allWerts[0],
            aktBoard: [],
            // aktBoard: [[50, 30], [30, 50]],
            counter: 0,
            setIntervalFn: "",
            steps: 0
        };
        this.allWerts = bubbleSort(ranValues(10));
    }

    thomasChangeFunction = (aktBoard) => {
        let tausch = [];
        let forTrue = true;
        for (let i = 0; i < aktBoard.length; i++) {
            if (forTrue) {
                //Die Abfrage muss sein, weil sonst in allWerts[] ein Wert größer als Größe eingegeben wird
                if (this.state.counter < this.allWerts.length) {
                    // Ist der Wert an Stelle i aus aktuellen Board nicht gleich wie das nexte nexte aktuelle Board an der Stelle i 
                    if (aktBoard[i] !== this.allWerts[this.state.counter][i]) {
                        // console.log(aktBoardOne[i]);
                        forTrue = false;
                        tausch.push(aktBoard[i], aktBoard[i + 1]);
                    }
                }
            }
        }
        return tausch;
    }

    onFinishing() {
        for (let index = 0; index <= this.props.allWerts.length; index++) {
            this.setState({
                aktBoard: this.props.allWerts[this.state.counter],
                // aktBoardOne: this.props.allWerts[this.state.counter],
                counter: this.state.counter + 1
            });
            this.checkCounter();
        }
    }

    handleClickStart(evt) {
        this.setState({
            setIntervalFn: setInterval(this.changeBoard, 1000),
        })
    }

    reload(evt) {
        this.allWerts = bubbleSort(ranValues(10));
        clearInterval(this.state.setIntervalFn);
        this.setState({
            completed: false,
            aktBoard: this.allWerts[0],
            counter: 0,
            steps: 0,
            setIntervalFn: ""
        });

    }

    changeBoard = () => {
        //Warum verwende ich einmal die Abfrage >= und einmal <
        if (this.state.counter < this.allWerts.length) {
            this.setState(() => {
                return {
                    aktBoard: this.allWerts[this.state.counter],
                    counter: this.state.counter + 1
                }
            });
        }
        else {
            clearInterval(this.state.setIntervalFn);
            this.setState(() => {
                return {
                    completed: true,
                    setIntervalFn: ""
                }
            });
            this.context.setCompleted(this.props.number);
        }
        if (this.state.steps === 0) {
            this.setState({
                steps: this.allWerts.length
            })
        }
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

    componentDidUpdate() {
        // this.startButtonHandle();
        // this.reloadButtonHandle();
    }

    componentWillReceiveProps(prevProps, context) {
        // console.log("WillReceiveProps BOBO");
        if (context.reload) {
            this.reload();
            context.handleClickReloadNot();
        }
        if (context.start && this.state.steps === 0) {
            // console.log("WillReceiveProps start")
            this.handleClickStart();
        }
    }



    render() {
        const { aktBoard } = this.state;
        const paerchen = this.thomasChangeFunction(aktBoard);
        const staebe = aktBoard.map((e, y) => {
            //               1                                1  
            //            Ausdruck                        Ausdruck  
            if (aktBoard[y] === paerchen[0] && aktBoard[y + 1] === paerchen[1] || (1 + 1 == 3)) {
                // console.log("Ich werde rot", aktBoard[y]);
                return (
                    <Stab
                        className="thomas"
                        wert={aktBoard[y]}
                        key={y}
                    />
                )
            } else if (aktBoard[y] === paerchen[1] && aktBoard[y - 1] === paerchen[0]) {
                return (
                    <Stab
                        className="willLinks"
                        wert={aktBoard[y]}
                        key={y}
                    />
                )
            } else {
                return (
                    <Stab
                        className="white"
                        wert={aktBoard[y]}
                        key={y}
                    />
                )
            }
        });
        return (
            <div className="bubblesortContainer">
                <div className="bubblesort">
                    {staebe}
                </div>
                <div className="progressbar">
                    {this.state.counter > 0 ? <h1 style={{ color: "white", margin: 0 }}>{Math.floor(this.state.counter / this.state.steps * 100)}%</h1> : null}
                </div>
            </div>
        )
    }
}
export default Bubblesortcontainer;

// Pos       0  1  2  3  4  
//Anfang     51 26 50 70 40

//1 Schritt  26 51 50 70 40
//2 Schritt  26 50 51 70 40
//3 Schritt  26 50 51 40 70
// ----- For Schleife Zuende ------
//4 Schritt  26 50 40 51 70
// ----- For Schleife Zuende ------
//5 Schritt  26 40 50 51 70

//Anfang     51 26 50 70 40 >> Hier passt
//1 Schritt  26 51 50 70 40 >> Hier passt 
//2 Schritt  26 50 51 70 40 >> Hier passt
//3 Schritt  26 50 51 40 70 >> Hier passt
//4 Schritt  26 50 40 51 70 
//5 Schritt  26 40 50 51 70 
