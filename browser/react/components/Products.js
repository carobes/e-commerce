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
<<<<<<< HEAD
=======
    console.log(classes)
>>>>>>> a498ced2a218d62a7171a9f88a60ab25b1d9736a
    return (
        <div>
            <Grid container spacing={16}>
                {products.map(product => (
                    <Grid key={product.id} item xs={4}>

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
                                    {product.descripcion}
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