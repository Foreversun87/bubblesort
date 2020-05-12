import React, { Component } from 'react';
import './Bubblesortcontainer.css';
import Stab from '../../Stab';
import { BubblesortContext } from "./BubblesortContext";

class Bubblesortcontainer extends Component {
    static contextType = BubblesortContext;
    
    render() {
        const {aktBoard} = this.context;
        const paerchen = this.context.thomasChangeFunction(aktBoard);
        const staebe = aktBoard.map((e, y) => {
            //               1                                1  
            //            Ausdruck                        Ausdruck  
            if (aktBoard[y] === paerchen[0] && aktBoard[y + 1] === paerchen[1] || (1 + 1 == 3)) {
                // console.log("Ich werde rot", aktBoard[y]);
                return (
                    <Stab
                        className="thomas"
                        wert={aktBoard[y]}
                        key={y}
                    />
                )
            } else if (aktBoard[y] === paerchen[1] && aktBoard[y - 1] === paerchen[0]) {
                return (
                    <Stab
                        className="willLinks"
                        wert={aktBoard[y]}
                        key={y}
                    />
                )
            } else {
                return (
                    <Stab
                        className="white"
                        wert={aktBoard[y]}
                        key={y}
                    />
                )
            }
        });
        return (
            <div className='container'>
                <div className="bubblesortContainer">
                    {staebe}
                </div>
            </div>
        )
    }
}
export default Bubblesortcontainer;

// Pos       0  1  2  3  4  
//Anfang     51 26 50 70 40

//1 Schritt  26 51 50 70 40
//2 Schritt  26 50 51 70 40
//3 Schritt  26 50 51 40 70
// ----- For Schleife Zuende ------
//4 Schritt  26 50 40 51 70
// ----- For Schleife Zuende ------
//5 Schritt  26 40 50 51 70




//Anfang     51 26 50 70 40 >> Hier passt
//1 Schritt  26 51 50 70 40 >> Hier passt 
//2 Schritt  26 50 51 70 40 >> Hier passt
//3 Schritt  26 50 51 40 70 >> Hier passt
//4 Schritt  26 50 40 51 70 
//5 Schritt  26 40 50 51 70 
