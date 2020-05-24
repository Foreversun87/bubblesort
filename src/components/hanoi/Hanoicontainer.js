import React from "react";
import "./hanoi_style.css";
import array from "./hanoi";
import Scheibe from "./scheibe/Scheibe";
import { BubblesortContext } from "../bubblesort/BubblesortContext";

export default class Hanoicontainer extends React.Component {
    static contextType = BubblesortContext;

    constructor(props) {
        super(props);
        this.state = {
            aktBoard: [],
            counter: 0,
            setIntervalFn: "",
            completed: false,
            steps: 0,
            links: 0,
            mitte: 0,
            rechts: 0
        }
        this.allWerts = array;
    }

    changeBoard = () => {
        // this.props.setStepsCounter(this.state.counter, this.state.steps);
        if (this.state.counter < this.allWerts.length - 1) {
            this.setState((prevState, prevProps) => {
                return {
                    counter: prevState.counter + 1
                }
            });

            this.setState((prevState, prevProps) => {
                return {
                    aktBoard: this.allWerts[prevState.counter],
                    links: prevState.aktBoard[0],
                    mitte: prevState.aktBoard[1],
                    rechts: prevState.aktBoard[2]
                }
            });
            // this.setState({
            //     counter: this.state.counter + 1,
            // });

            // this.setState({
            //     counter: this.state.counter + 1,
            //     aktBoard: this.allWerts[this.state.counter],
            //     links: this.state.aktBoard[0],
            //     mitte: this.state.aktBoard[1],
            //     rechts: this.state.aktBoard[2]
            // });

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
            setIntervalFn: setInterval(this.changeBoard, 500),
        })
    }

    componentDidMount() {
        this.setState({
            aktBoard: this.allWerts[0],
            links: this.allWerts[0][0],
            mitte: this.allWerts[0][1],
            rechts: this.allWerts[0][2]
        })
    }

    onClick = () => {
        // this.setState((prevState, prevProps) =>  {
        //     return {counter: prevState.counter + 1}
        // })
        this.changeBoard();
    }

    reload = () => {

        this.allWerts = array;
        clearInterval(this.state.setIntervalFn);
        this.setState({
            aktBoard: this.allWerts[0],
            counter: 0,
            setIntervalFn: "",
            completed: false,
            steps: 0,
            links: this.allWerts[0][0],
            mitte: this.allWerts[0][1],
            rechts: this.allWerts[0][2]
        })
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
        // console.log("Render BOBO")
        let { aktBoard } = this.state;
        // const scheibenLinks = aktBoard.map((e, y) => {
        //     for (let i = 0; i < e; i++) {
        //         return (
        //             <Scheibe
        //                 className=""
        //                 key={y}
        //             />
        //         )
        //     }
        // }
        // );

        let arr0 = []; let arr1 = []; let arr2 = [];
        for (let i = 0; i < aktBoard[0]; i++) {
            console.log(aktBoard[i])
            arr0.push(<Scheibe direction={1}  key={i} value={i} />);
            // 4 0 0 <=== alte State
            // 1. schitt 3 0 1 <=== neu State
            
            // 3 0 1 <=== alte State
            // 2 1 1 <=== neu State
            
        }

        for (let i = 0; i < aktBoard[1]; i++) {
            arr1.push(<Scheibe key={i} value={i} />);
        }

        for (let i = 0; i < aktBoard[2]; i++) {
            arr2.push(<Scheibe key={i} value={i} />);
        }


        //  const scheibenMitte


        console.log(arr0);
        return (

            <div className="hanoiContainer">
                {/* <button style={{ width: "3%" }} onClick={this.onClick}>Klick mich</button> */}
                <div className="hanoi">
                    <div className="hanoi-grundbalken"></div>
                    <div className="hanoi-links">
                        <div className="hanoi-balken-links"></div>
                        {arr0}
                    </div>
                    <div className="hanoi-mitte">
                        <div className="hanoi-balken-mitte"></div>
                        {arr1}
                    </div>
                    <div className="hanoi-rechts">
                        <div className="hanoi-balken-rechts"></div>
                        {arr2}
                    </div>
                </div>
                <div className="progressbar">
                    {this.state.counter > 0 ? <h1 style={{ color: "white", margin: 0 }}>{Math.floor(this.state.counter / (this.state.steps - 1) * 100)}%</h1> : null}
                </div>
            </div>
        )
    }
}