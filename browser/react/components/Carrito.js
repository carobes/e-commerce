import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';


const styles = {
    button: {
        color: "white"
    },
};

export default withStyles(styles)(props => {
    const { classes, num_elems_carro, enabled } = props

    return (
        <div>
            <IconButton className={classes.button} disabled={enabled} aria-label="Add to shopping cart">
              <Badge className={classes.margin} badgeContent={num_elems_carro} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>
        </div>
    );
})
