import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import PopoverContent from './PopoverContent.js';
import './styles/popover.css'

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

const styles = theme => ({
    typography: {
        margin: theme.spacing.unit * 2,
    },
});

function DonationPopover(props) {
    const { classes } = props;

    return (
        <WithState>
            {({ anchorEl, updateAnchorEl }) => {
                const open = Boolean(anchorEl);
                return (
                    <React.Fragment>
                        <img src={props.isGood ? "https://raw.githubusercontent.com/vasvenk/PublicPictures/master/images/logo%20options/logo_green%20(128x128).png":
                            "https://raw.githubusercontent.com/vasvenk/PublicPictures/master/images/logo%20options/logo_red%20(128x128).png"}
                             className="productIcon"
                             aria-owns={open ? 'render-props-popover' : undefined}
                             aria-haspopup="true"
                             variant="contained"
                             onClick={event => {
                                 updateAnchorEl(event.currentTarget);
                             }}/>


                        <Popover
                            id="render-props-popover"
                            open={open}
                            anchorEl={anchorEl}
                            onClose={() => {
                                updateAnchorEl(null);
                            }}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <PopoverContent title={props.title}
                                            donations={props.donations}
                                            causes={props.causes}/>
                        </Popover>
                    </React.Fragment>
                );
            }}
        </WithState>
    );
}

DonationPopover.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DonationPopover);