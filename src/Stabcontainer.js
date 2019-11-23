import React, {Component} from 'react';
import './Stabcontainer.css';
import { values,bubbleSort } from "./helpers";
import Stab from './Stab';



class Stabcontainer extends Component{
    static defaultProps = {
        allWerts: bubbleSort(values()),
        allColors: ["purple", "magenta", "violet", "pink", "green", "#7171ff", "#c0ffd6", "#ff8c8c"]
    };    
    
    render(){
        const staebe = this.props.allWerts.map((singleWert, index) => (
            <Stab 
            colors={this.props.allColors}
            wert={singleWert}
            key={index}
            />
          ));
          console.log(staebe);
        return(
              <div className='stabContainer'>{staebe}</div>
        )
    }
}

export default Stabcontainer;