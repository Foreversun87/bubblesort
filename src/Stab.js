import React, {Component} from 'react';
import { choice } from "./helpers";
import './Stab.css';



class Stab extends Component{
    
    constructor(props) {
        super(props);
        this.state = { 
            color: choice(this.props.colors),
            wert: this.props.wert
        };
    }
    
    render(){
        console.log(this.props.e); 
        return(
            <div 
                className="stab" 
                style={{ 
                    backgroundColor: this.state.color,
                    width: this.state.wert * 3,
                }}
            >
            <div className="stab-wert">{this.state.wert}</div>
            </div> 
        )
    }
}

export default Stab;