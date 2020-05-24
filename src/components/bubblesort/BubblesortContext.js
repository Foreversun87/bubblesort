import React, { createContext } from "react";
// Dieses Objekt kann ich an beliebigen Componenten einbinden, 
// um die Funktionalität vom BubblesortContextProvider zu nutzen
export const BubblesortContext = createContext();
export default class BubblesortContextProvider extends React.Component {
    
    // Lifecycle-Methoden, wann werden welche Compnenten geupdated?
    constructor(props) {
        super(props);
        this.state = {
            reload: false,
            start: false,
            complete1: false,
            complete2: false,
            complete3: false

        };
        this.handleClickStart = this.handleClickStart.bind(this);
        this.handleClickReload = this.handleClickReload.bind(this);
    }

    handleClickStart(evt) {
        this.setState({
            start: true
        })
    }

    handleClickReload(evt) {
        this.setState({
            reload: true,
            start: false,
            complete1: false,
            complete2: false,
            complete3: false
        })
    }

    handleClickReloadNot = (evt) => {
        this.setState({
            reload: false,
        })
    }


    completedCheck = () => {
        return this.state.complete1 && this.state.complete2 && this.state.complete3 ? true : false;
    }

    setCompleted = (number) => {
        if (number === 1) {
            this.setState({
                complete1: true
            })
        } else if (number === 2) {
            this.setState({
                complete2: true
            })
        } else if (number === 3) {
            this.setState({
                complete3: true
            })
        } else {
            throw Error;
        }

    }

    unSetCompleted = (number) => {
        if (number === 1) {
            this.setState({
                complete1: false
            })
        } else if (number === 2) {
            this.setState({
                complete2: false
            })
        } else if (number === 3) {
            this.setState({
                complete3: false
            })
        } else {
            throw Error;
        }

    }




    render() {
        return (
            <BubblesortContext.Provider value={{
                ...this.state,
                handleClickStart: this.handleClickStart,
                handleClickReload: this.handleClickReload,
                handleClickReloadNot: this.handleClickReloadNot,
                setCompleted: this.setCompleted,
                unSetCompleted: this.unSetCompleted,
                completedCheck: this.completedCheck,
                algorithmusChooser: this.algorithmusChooser
            }}>
                {this.props.children}
            </BubblesortContext.Provider>
        )
    }
}