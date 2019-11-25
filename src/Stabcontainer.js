import React, {Component} from 'react';
import './Stabcontainer.css';
import { bubbleSort, ranValues} from "./helpers";
import Sketch from 'react-p5';
import Stab from './Stab';

class Stabcontainer extends Component{
    static defaultProps = {
        maxValues: 180,
        allWerts: bubbleSort(ranValues(180)),
        counter: 0
    };
    
    constructor(props) {
        super(props);
        // TODO: set initial state
        this.state = {
            completed: false,
            aktBoard: this.props.allWerts[0],
            counter: 1
            // highBeep: 2000
        };
        
        this.handleClick = this.handleClick.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
        this.onFinishing = this.onFinishing.bind(this);
        
      }
    
    handleClick(evt){
        setInterval(() => {
            if(this.state.counter <= this.props.allWerts.length - 1){
                this.setState({ 
                    aktBoard: this.props.allWerts[this.state.counter],
                    counter: this.incrementCounter(this.state),
                    highBeep: this.state.highBeep - 10            
                });
                this.checkCounter();
                // sound(this.state.highBeep);


            }else{
                clearInterval();
            }
        }, 100);    
    }

    onFinishing(){
        for (let index = 0; index <= this.props.allWerts.length; index++) {
                this.setState({ 
                    aktBoard: this.props.allWerts[this.state.counter],
                    counter: this.incrementCounter(this.state)            
                });
                this.checkCounter();
        }
    }

    componentDidUpdate(a,b){
        
    }

    checkCounter(){
        // console.log("checkCounter: ", this.state.counter, "allWerts.length: ", this.props.allWerts.length )
        if(this.state.counter >= this.props.allWerts.length){
            this.setState(
                {completed: true}
            );
        }
    }

    incrementCounter(curState){
        return curState.counter + 1;
    }
    
    render(){
        // sound(freq);
        
        const aktBoard = this.state.aktBoard;
           let staebe = aktBoard.map((e , y) => (
                <Stab 
                wert={aktBoard[y]}
                key={y}
                />
                                
              ));
        //   console.log(staebe);
        return(
            <div>
                <div className='stabContainer'>{staebe}</div>
                {!this.state.completed ? (
                    <center><button className="stabContainerButton" onClick={this.handleClick}>Algorithmus starten</button></center>
                    
                ):( 
                    <div><center>Fertig</center></div>
                ) }
                </div>
        )
    }
}

export default Stabcontainer;