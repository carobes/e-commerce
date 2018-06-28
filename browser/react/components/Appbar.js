import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    colorBar: {
        backgroundColor: '#2196F3',
        color: 'white'
    }
}

export default withStyles(styles)(props => {
    const {classes} = props
    return <AppBar className={classes.colorBar} position="sticky" color="inherit">
        <Toolbar>
          <Typography variant="title" color="inherit">
            TonE-Commerce
          </Typography>
        </Toolbar>
      </AppBar>
})