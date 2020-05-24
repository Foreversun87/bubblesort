import React from "react";
import { Route, Switch } from 'react-router-dom'
import Main from "./Main";
import Viewer from "./Viewer";
import Sidebar from "./Sidebar";
import "./Dashboard-style.css";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount(){
        console.log("UNMOUNT FROM DASHBOARD")
    }

    render() {
        return (
            <div className="dashboard">
                <Sidebar />
                <Switch>
                    <Route exact path="/" render={() => <Main />} />
                    <Route exact path="/view" render={() => <Viewer />} />
                </Switch>
            </div>
        )
    }
}