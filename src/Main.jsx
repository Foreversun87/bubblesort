import React from "react";
import Bubblesortcontainer from './components/bubblesort/Bubblesortcontainer';
import "./Main-style.css"

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
                <div className="main">
                <Bubblesortcontainer  />
                <Bubblesortcontainer  />
                <Bubblesortcontainer  />
                </div>    
        )
    }
}