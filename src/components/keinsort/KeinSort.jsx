import React from "react";
import { BubblesortContext } from "../bubblesort/BubblesortContext";

export default class KeinSort extends React.Component {
    static contextType = BubblesortContext;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    
    componentWillUnmount(){
        this.context.unSetCompleted(this.props.number);
    }

    componentWillReceiveProps(){
        if(this.context.reload){
            this.context.setCompleted(this.props.number);
            this.context.handleClickReloadNot();
        }
    }
   
    

    render() {
        return (
            <div>
                <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><p>Kein Algorithmus ausgewählt</p></h1>
            </div>
        )
    }
}