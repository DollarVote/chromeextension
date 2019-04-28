import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PieChart from './PieChart';
import './styles/politicalCard.css';

class PopoverContent extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (

            <Card  className="politicalCard">
                <div className="politicalCard">
                    <CardContent>
                        <h1
                            // gutterBottom variant="h5"
                            // component="h2"
                            // className="politicalTitle"
                            align="center"
                        >
                            {this.props.title}
                        </h1>
                        <h3 align="center">Causes you don't support.</h3>
                        <ul>
                            {this.props.causes.bad.map((cause) => <li>{cause}</li>)}
                        </ul>
                        <h3 align="center">Causes you do support.</h3>
                        <ul>
                            {this.props.causes.good.map((cause) => <li>{cause}</li>)}
                        </ul>

                    </CardContent>
                    <div>
                        <PieChart donations={this.props.donations} className="center-div" align="center"/>
                    </div>
                </div>
            </Card>
        )
    };
}

export default PopoverContent;