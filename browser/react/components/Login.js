import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    buttonLogin: {
        backgroundColor: '#6eb4ea',
        color: 'white',
        '&:hover': {
            color: 'white'
        }
    }
}

export default withStyles(styles)(props => {
    const {classes} = props
    return <div>
            <Button className={classes.buttonLogin}  size="medium" >
                Login
            </Button>
        </div>
    
})
