import React from 'react';
import { VictoryPie } from 'victory';


class DonationChart extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <VictoryPie
                colorScale={["tomato", "green"]}
                data={[
                    { x: "Causes you don't support", y: 35 },
                    { x: "Causes you support", y: 65 }
                    ]}
            />
        )
    }
}

export default DonationChart;
