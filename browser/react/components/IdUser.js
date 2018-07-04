
import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IdUserCard from './IdUserCard';

const styles = {
    card: {
        minWidth: 345,
        height: 245,
        maxWidth: 245,
    },
    title: {
        marginBottom: 8,
        fontSize: 18,
        color: '#808080'
    },
    pos: {
        marginTop: 18,
    },
    avatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: '#6eb4ea',
        float: 'left',
        width: '75px',
        height: '75px',
    },

    row: {
        display: 'flex',
        float: 'right',
    },
    buttonOrden: {
        backgroundColor: '#6eb4ea',
        color: 'white',
        '&:hover': {
            color: 'white'
        }
    }
}

export default withStyles(styles)(props => {
    const { classes } = props

    return (
        <div>
            <br />
            <IdUserCard user={props.user} />
            <br />
            <Button className={classes.buttonOrden} size="medium" >
                Mis Ordenes
            </Button>
        </div>
    )
})








