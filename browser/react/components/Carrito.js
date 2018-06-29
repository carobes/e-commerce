import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';


const styles = {
    button: {
        color: "white"
    },
};

export default withStyles(styles)(props => {
    const { classes } = props

    return (
        <div>
            <IconButton className={classes.button} aria-label="Add to shopping cart">
                <ShoppingCart />
            </IconButton>
        </div>
    );
})
