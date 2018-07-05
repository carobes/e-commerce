
import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';


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
            <Card className={classes.card}>
                <div className={classes.row}>
                    <Avatar className={classes.avatar}>{!props.user.nombre ? [] : props.user.nombre[0] + props.user.apellido[0]}</Avatar>
                </div>
                <br />
                <CardContent>
                    <Typography className={classes.pos} variant="headline" component="h1">
                        {!props.user ? 'loading..' : props.user.nombre}
                    </Typography>
                    <Typography variant="headline" component="h2">
                        {!props.user ? 'loading..' : props.user.apellido}
                    </Typography>
                    <br />
                    <Typography className={classes.title} variant="headline" component="h2">
                        {!props.user ? 'loading..' : props.user.edad}
                    </Typography>
                    <Typography className={classes.title} variant="headline" component="h2">
                        {!props.user ? 'loading..' : props.user.mail}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})








