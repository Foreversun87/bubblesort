import React, {Component} from 'react';
import { choice, sound } from "./helpers";
import './Stab.css';



class Stab extends Component{
    
    static defaultProps = {
        allColors: ["purple", "magenta", "violet", "pink", "green", "#7171ff", "#c0ffd6", "#ff8c8c"]    
    };

    constructor(props) {
        super(props);
        this.state = { 
            color: choice(this.props.allColors)
        };
    }
    
    componentDidUpdate(a,b){
        
    }

    render(){
        return(
            <div 
                className="stab" 
                style={{ 
                    backgroundColor: this.state.color,
                    height: this.props.wert * 4.5,
                }}
            >
            <div className="stab-wert">{this.props.wert}</div>
            </div>
             
        )
    }
}

export default Stab;