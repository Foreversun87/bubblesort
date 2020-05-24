import React from "react";

export default class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount(){
        console.log("UNMOUNT FROM TEST.jsx")
    }

    componentWillMount(){
        console.log("WILLMOUNT FROM TEST.jsx")
    }
    componentDidMount(){
        console.log("DIDMOUNT FROM TEST.jsx")
    }

    render() {
        return (
            this.props.bool
                ? (<div>
                    <h1>Oh yes its true</h1>
                </div>)
                : (
                    <h1>Oh no its false</h1>
                )
        )
    }
}