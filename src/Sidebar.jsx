import React from "react";

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="sidebar">
                <p>Hello from Sidebar</p>
                <button onClick={this.props.handleClick}>Klick mich!</button>
            </div>
        )
    }
}