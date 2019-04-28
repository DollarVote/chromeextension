import React from 'react';
import Chart from 'react-google-charts'


class DonationChart extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let donationBreakdown = [["Support", "Percentage Donations"]].concat(this.props.donations);
        return (
            <Chart
                width={'400px'}
                height={'250px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={donationBreakdown}
                options={{
                    title: 'Company Donations',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        )
    }
}

export default DonationChart;
