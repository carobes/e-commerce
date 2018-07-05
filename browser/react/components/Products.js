import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardMedia, CardContent, CardActions, Grid, IconButton } from '@material-ui/core'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    padre: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}

export default withStyles(styles)(props => {
    const { classes, products } = props
    //console.log(classes)
    return (
        <div>
            <Grid container spacing={16}>
                {[0, 1, 3].map(value => (
                    <Grid key={value} item xs={4}>

                        <Card className={classes.card}>
                            <Link to={`/products/${product.id}`}>
                                <CardMedia
                                    className={classes.media}
                                    image={product.imagens[0].ruta}
                                />
                            </Link>
                            <CardContent>
                                <Link to={`/products/${product.id}`}>
                                    <Typography gutterBottom variant="headline" component="h2">
                                            {product.nombre}
                                    </Typography>
                                </Link>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                </Typography>
                            </CardContent>
                            <CardActions className={classes.padre}>
                                <IconButton  size="small" color="secondary">
                                    <AddShoppingCart />
                                </IconButton>
                                <Typography  variant='title' color='primary' component="p">
                                    {product.precio}$
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
})
