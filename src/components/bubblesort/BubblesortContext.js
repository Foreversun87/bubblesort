import React, { createContext } from "react";
import { bubbleSort, bubbleSortFirstStep, ranValues } from "../../helpers";
// Dieses Objekt kann ich an beliebigen Componenten einbinden, 
// um die Funktionalität vom BubblesortContextProvider zu nutzen
export const BubblesortContext = createContext();
export default class BubblesortContextProvider extends React.Component {
   
    //***     Verschiedene Testdaten     ***// 
        static defaultProps = {
            allWerts: bubbleSort(ranValues(10))
        };

    constructor(props) {
        super(props);
        this.state = {
            start: false,
            completed: false,
            aktBoard: this.props.allWerts[0],
            // aktBoard: [[50, 30], [30, 50]],
            counter: 1,
            setIntervalFn: ""
        };
        this.allWerts = this.props.allWerts;
        this.handleClickStart = this.handleClickStart.bind(this);
        this.handleClickReload = this.handleClickReload.bind(this);
    }

    checkCounter() {
        if (this.state.counter >= this.allWerts.length) {
            this.setState(() => { return { completed: true } }
            );
            clearInterval(this.state.setIntervalFn);
        }
    }
    

    thomasChangeFunction = (aktBoard) => {
        // console.log("aktBoardOne ", aktBoardOne);
        // console.log("aktBoardOneNExtNext ", this.props.allWerts[this.state.counter]);
        let tausch = [];
        let forTrue = true;
        // console.log(this.state.counter);
        // console.log(this.props.allWerts.length);
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
            start: true            
        })
    }

    handleClickReload(evt){
        let values = bubbleSort(ranValues(10));
        clearInterval(this.state.setIntervalFn);
        this.setState({
            completed: false,
            start: false,
            aktBoard: values[0],
            counter: 1,
            setIntervalFn: ""
        });
        this.allWerts = values;
    }

    changeBoard = () => {
        this.checkCounter();
        if (this.state.completed === false) {
            this.setState(() => {
                return {
                    aktBoard: this.allWerts[this.state.counter],
                    counter: this.state.counter + 1
                }
            });
        }
    }

    render() {
        return (
            <BubblesortContext.Provider value={{ ...this.state, thomasChangeFunction: this.thomasChangeFunction, handleClickStart: this.handleClickStart, handleClickReload: this.handleClickReload }}>
                {this.props.children}
            </BubblesortContext.Provider>
        )
    }
}