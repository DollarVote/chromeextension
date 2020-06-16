import React from 'react';
import { Pane, Heading, UnorderedList, ListItem } from 'evergreen-ui';
import { ProgressBar }  from './components/progressBar';
import './styles/popoverContents.css';

class PopoverContent extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Pane
                margin={20}
                width={220}
            >
                  <h1 className="companyName">{this.props.title}</h1>
                  <ProgressBar width={220} percent={0.6}/>
                  <div className="descriptionPoints">
                    <UnorderedList
                        icon="cross"
                        iconColor="success"
                    >
                        {this.props.causes.bad.map((cause) =>
                        <ListItem>{cause}</ListItem>)}
                    </UnorderedList>
                    <UnorderedList
                        icon="tick"
                        iconColor="danger"
                    >
                        {this.props.causes.good.map((cause) => 
                        <ListItem>{cause}</ListItem>)}
                    </UnorderedList>
                  </div>
            </Pane>
        )
    };
}

export default PopoverContent;