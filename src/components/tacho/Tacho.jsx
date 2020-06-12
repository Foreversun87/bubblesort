import React from "react";
import Plot from 'react-plotly.js';
import "./Tacho-style.css";

export default class Tacho extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    type: "indicator",
                    value: 20,
                    delta: { reference: 100 },
                    gauge: { axis: { visible: false, range: [0, 100] } },
                }
            ],
            layout: {
                template: {
                    data: {
                        indicator: [
                            {
                                // title: { text: "Herr Hofmanns Prüfstand" },
                                mode: "number+delta+gauge",
                                delta: { reference: 90 }
                            }
                        ]
                    }
                }
            },
            frames: [],
            config: {}
        };
    }


    render() {
        return (
            <Plot
                data={this.state.data}
                layout={this.state.layout}
                config={{ responsive: true }}
            // autosize={true}
            />
        )
    }
}