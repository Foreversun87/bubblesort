import React from "react";
import Bubblesortcontainer from './Bubblesortcontainer';
import "./Main-style.css"

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
                <div className="main">
                <Bubblesortcontainer aktBoardOne={this.props.aktBoardOne} thomasChangeFunction={this.props.thomasChangeFunction} />
                <Bubblesortcontainer aktBoardOne={this.props.aktBoardOne} thomasChangeFunction={this.props.thomasChangeFunction} />
                <Bubblesortcontainer aktBoardOne={this.props.aktBoardOne} thomasChangeFunction={this.props.thomasChangeFunction} />
                </div>    
        )
    }
}