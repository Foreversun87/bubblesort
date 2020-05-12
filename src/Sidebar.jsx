import React from "react";
import {BubblesortContext} from "./components/bubblesort/BubblesortContext";
import { Route, Switch, Link} from 'react-router-dom'

export default class Sidebar extends React.Component{
    static contextType = BubblesortContext;
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="sidebar">
                <a href="https://www.w3schools.com/nodejs/nodejs_mysql_select.asp">MYSQL</a>
                <div>
                    <p>Hello from Sidebar</p>
                    {this.context.start ? <button onClick={null}>Start</button> : <button onClick={this.context.handleClickStart}>Start</button>  }
                    <button onClick={this.context.handleClickReload}>Reload</button>
                    <Link to="/view">Übersicht</Link>
                </div>
                <div>
                    Schritte: {this.context.counter}, Fertig: {this.context.completed ? `ja` : `nein`}
                </div>
            </div>
        )
    }
}