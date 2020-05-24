import React from "react";
import { BubblesortContext } from "./components/bubblesort/BubblesortContext";
import "./Main-style.css"
import SelectForm from "./SelectForm";

export default class Main extends React.Component {
    static contextType = BubblesortContext;
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        console.log("OH NO UNMOUNT")
        this.context.handleClickReload();
        this.context.handleClickReloadNot();
    }

    componentDidUpdate(){
       
       
    }

    componentWillReceiveProps(prevProps, context){
       
      
    }

    render() {
        // let sortListe = (this.context.start ? (
        //     <div>
        //         <Bobosortcontainer number={1} />
        //         <Bobosortcontainer number={2} />
        //         <Bobosortcontainer number={3} />
        //     </div>                
        //     ) : (null));

        return (
            <div className="main">
                {/* {sortListe} */}
                {/* <Bobosortcontainer number={1} />
                <Bobosortcontainer number={2} />
                <Bobosortcontainer number={3} /> */}
                <SelectForm number={1} />
                <SelectForm number={2} />
                <SelectForm number={3} />
            </div>
        )
    }
}