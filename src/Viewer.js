import React from "react";
import { Link } from 'react-router-dom'


export default class Viewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentWillMount() {
        const raw = await fetch("http://127.0.0.1:3001/view");
        const data = await raw.json();
        this.setState({
            data: data
        });
    }

    componentWillUnmount() {
        console.log("OH NO UNMOUNT")
    }

    render() {
        const lines = this.state.data.map(e => (
            <p key={e.id}>Der Datumsstempel: <strong>{e.datumsstempel} </strong>
            und die Art des Algorithmus: <strong>{e.art} </strong>
             und die Schritte: <strong> {e.schritte} </strong> </p>)
        );

        return (
            <div>
                <h1>Hello from Node.js</h1>
                <Link to="/">zurück zur Basis</Link>
                {/* {Node.js Inhalt } */}
                {lines}
                <h2>Projektvorschlag</h2> }
                {/* <img width="700" height="auto" src="http://localhost:3001/images/projektvorschlag.png" /> */}
            </div >
        )
    }
}