import React from "react";
import { Route, Switch} from 'react-router-dom'
import Main from "./Main";
import View from "./View";
import Sidebar from "./Sidebar";
import "./Dashboard-style.css";



export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    


    render() {
        return (
            <div className="dashboard">
                <Sidebar />
                <Switch>
                    <Route exact path="/" render={() => <Main />} />
                    <Route exact path="/view" render={() => <View />} />
                </Switch>
            </div>
        )
    }
}