import React from "react";
import { Link } from 'react-router-dom'

export default class View extends React.Component {
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

    render() {

        const lines = this.state.data.map(e => (
            <p key={e.id}>Der Datumsstempel: <strong>{e.datumsstempel}</strong>   
            und die Art des Algorithmus: <strong>{e.art}</strong> 
             und die Schritte: <strong> {e.schritte} </strong> </p>)
        );

        // const cards = this.state.data.map(c => (
        //     <p key={c.id}> {c.art} ... {c.datumsstempel} </p>
        //   ));
        // console.log(cards);

        return (
            <div>
                <h1>Hello from View</h1>
                {/* {this.state.data.map(e => (<p key={e.id}>Der Datumsstempel: {e.datumsstempel} und die Art des Algorithmus: {e.art} und die Schritte: {e.schritte} </p>))} */}
                {lines}
                <Link to="/">zurück zur Basis</Link>
            </div >
        )
    }
}