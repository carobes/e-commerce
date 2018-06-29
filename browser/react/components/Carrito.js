import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


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
                <AddShoppingCartIcon />
            </IconButton>
        </div>
    );
})
