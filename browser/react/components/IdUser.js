
import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';



const user = {
    nombre: 'Toni',
    apellido: 'Pastafrola',
    edad: '48',
    mail: 'toni48@pastafrola5.com'
}

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
                    <Avatar className={classes.avatar}>{user.nombre[0] + user.apellido[0]}</Avatar>
                </div>
                <br />
                <CardContent>
                    <Typography className={classes.pos} variant="headline" component="h1">
                        {user.nombre}
                    </Typography>
                    <Typography variant="headline" component="h2">
                        {user.apellido}
                    </Typography>
                    <br />
                    <Typography className={classes.title} variant="headline" component="h2">
                        {user.edad}
                    </Typography>
                    <Typography className={classes.title} variant="headline" component="h2">
                        {user.mail}
                    </Typography>
                </CardContent>
            </Card>
            <br />
            <Button className={classes.buttonOrden} size="medium" >
                Mis Ordenes
            </Button>
        </div>
    )
})








