import React, { Component } from 'react';
import './Stabcontainer.css';
import { bubbleSort, ranValues, sound } from "./helpers";
import Stab from './Stab';

// https://www.npmjs.com/package/react-sound



class Stabcontainer extends Component {
    static defaultProps = {
        // allWerts: bubbleSort(ranValues(200)),
        // allWerts: bubbleSort([26, 85, 70, 28, 63, 57, 98, 53, 10, 3]),
        allWerts: bubbleSort([1, 2, 3, 4, 5, 26, 85, 85, 70, 28, 63, 57, 98, 53, 10, 1, 6, 3, 9, 12]),
        // allWerts: bubbleSort([51, 26, 50, 70, 40]),
        // allWerts: [[50,30], [30,50]],
        // counter: 0
    };

    constructor(props) {
        super(props);
        this.state = {
            completed: false,
            aktBoard: this.props.allWerts[0],
            counter: 1,
            highBeep: 1000
        };
        this.handleClick = this.handleClick.bind(this);
        // this.onFinishing = this.onFinishing.bind(this);
    }

    handleClick(evt) {
        setInterval(() => {
            if (this.state.counter < this.props.allWerts.length) {
                this.setState({
                    aktBoard: this.props.allWerts[this.state.counter],
                    counter: this.state.counter + 1,
                    highBeep: this.state.highBeep - 10
                });
                this.checkCounter();
                sound(this.state.highBeep);
            } else {
                clearInterval();
            }
        }, 500);
    }

    onFinishing() {
        for (let index = 0; index <= this.props.allWerts.length; index++) {
            this.setState({
                aktBoard: this.props.allWerts[this.state.counter],
                // aktBoard: this.props.allWerts[this.state.counter],
                counter: this.state.counter + 1
            });
            this.checkCounter();
        }
    }

    checkCounter() {
        if (this.state.counter >= this.props.allWerts.length) {
            this.setState(
                { completed: true }
            );
        }
    }

    componentDidUpdate(prevState, state) {
        // console.log("Update ausgeführt prev ", prevState, " new: ", state);
    }

    componentDidMount() {
        console.log("Mount ausgeführt");
    }

    thomasChangeFunction = (aktBoard) => {
        // console.log("aktBoard ", aktBoard);
        // console.log("aktBoardNExtNext ", this.props.allWerts[this.state.counter]);
        let tausch = [];
        let forTrue = true;
        // console.log(this.state.counter);
        // console.log(this.props.allWerts.length);
        for (let i = 0; i < aktBoard.length; i++) {
            if (forTrue) {
                //Die Abfrage muss sein, weil sonst in allWerts[] ein Wert größer als Größe eingegeben wird
                if (this.state.counter < this.props.allWerts.length) {
                    // Ist der Wert an Stelle i aus aktuellen Board nicht gleich wie das nexte nexte aktuelle Board an der Stelle i 
                    if (aktBoard[i] !== this.props.allWerts[this.state.counter][i]) {
                        // console.log(aktBoard[i]);
                        forTrue = false;
                        tausch.push(aktBoard[i], aktBoard[i + 1]);
                    }
                }
            }
        }
        return tausch;
    }

    render() {
        const aktBoard = this.state.aktBoard;
        const paerchen = this.thomasChangeFunction(aktBoard);


        // console.log("parchen", paerchen);
        // console.log(this.state.counter);
        // if (this.state.counter) {

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
        // }
        // console.log(this.props.allWerts);
        return (
            <div>
                <div className='container'>
                    <div className="stabContainerButton">
                        <button style={{ padding: "15px", margin: "10px 0" }} onClick={this.handleClick}>Algorithmus starten</button>
                    </div>
                    <div className="stabContainer">
                        {staebe}
                    </div>

                </div>
            </div>
        )
    }
}

export default Stabcontainer;

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
