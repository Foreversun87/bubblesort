import React from "react";
import { BubblesortContext } from "./components/bubblesort/BubblesortContext";
import { Link } from 'react-router-dom'

export default class Sidebar extends React.Component {
    static contextType = BubblesortContext;
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-completed">
                    Fertig: {this.context.completedCheck() ? `ja` : `nein`}
                    {/* <div className="sidebar-completed1"></div>
                    <div className="sidebar-completed2"></div>
                    <div className="sidebar-completed3"></div> */}
                </div>
                <div className="sidebar-buttonContainer">
                    {this.context.start ? <button onClick={null}>Start</button> : <button onClick={this.context.handleClickStart}>Start</button>}
                    <button onClick={this.context.handleClickReload}>Reload</button>
                </div>
                <div className="sidebar-view" style={this.context.completedCheck() ? {backgroundColor: "green"} : null }>
                    {this.context.completedCheck() ? <Link to="/view">Übersicht</Link> : null}
                </div>
            </div>
        )
    }
}
