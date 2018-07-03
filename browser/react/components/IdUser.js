
import React from 'react';
import { Typography, Card, CardMedia, CardContent, CardActions, Grid, IconButton } from '@material-ui/core'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const user = {
    nombre: 'Toni',
    apellido: 'Pastafrola',
    edad: '48',
    mail: 'toni48@pastafrola5.com'
}



const styles = {
    card: {

        minWidth: 345,
        height: 300,
        maxWidth: 300,

    },
    // whitecard: {

    //     minWidth: 345,
    //     height: 345,
    //     maxWidth: 345,

    // }

    title: {
        marginBottom: 16,
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },

    // titleBar: {
    //     background:
    //         'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    // }
}

export default withStyles(styles)(props => {
    const { classes } = props

    return (

        <div>
            <br />

            <Card className={classes.card}>
                <CardContent>

                    <Typography variant="headline" component="h1">
                        {user.nombre}
                    </Typography>
                    <Typography variant="headline" component="h2">
                        {selectedProduct.apellido}
                    </Typography>
                    <Typography variant="headline" component="h2">
                        {selectedProduct.edad}
                    </Typography>
                    <Typography variant="headline" component="h2">
                        {selectedProduct.mail}
                    </Typography>
                </CardContent>
            </Card>



        </div>
    )
})








