import React from 'react';
import { Typography, Card, CardMedia, CardContent, CardActions, Grid, IconButton } from '@material-ui/core'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';

const selectedProduct = {
    nombre: 'Lizard',
    descripcion: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    imagen: ["/img/NIK_9984_edited_nik_800.jpg", "/img/NIK_9984_edited_nik_800.jpg", "/img/NIK_9984_edited_nik_800.jpg"],
    precio: 1200 + "$"
}
const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    card: {
        maxWidth: 345,
        minWidth: 345,

    },
    // whitecard: {

    //     minWidth: 345,
    //     height: 345,
    //     maxWidth: 345,

    // },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        height: 200,
        maxWidth: 345,

    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',

    },
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
    const bull = <span className={classes.bullet}>•</span>;
    return (

        <div>
            <Grid container spacing={12}>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="/img/NIK_9984_edited_nik_800.jpg"
                            title="Contemplative Reptile"
                        />
                    </Card>
                    <br />
                    <div className={classes.root}>
                        <GridList className={classes.gridList} cols={2.5}>
                            {selectedProduct.imagen.map(data => (
                                <GridListTile>
                                    <img src={data} />
                                    <GridListTileBar

                                    />
                                </GridListTile>
                            ))}
                        </GridList>


                    </div>
                </Grid>
                <Grid item xs={6}>

                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} variant="headline" component="h2">
                                {selectedProduct.precio}
                            </Typography>
                            <Typography variant="headline" component="h2">
                                {selectedProduct.nombre}
                            </Typography>
                            <Typography component="p">
                                {selectedProduct.descripcion}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton size="small" color="secondary">
                                <AddShoppingCart />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>


            </Grid>


        </div>
    )
})








