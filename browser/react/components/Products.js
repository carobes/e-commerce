import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardMedia, CardContent, CardActions, Grid, IconButton } from '@material-ui/core'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}

export default withStyles(styles)(props => {
    const { classes, products } = props
    console.log(products.imagens)
    return (
        <div>
            <Grid container spacing={16}>
                {products.map(product => (
                    <Grid key={product.id} item xs={4}>

                        <Card className={classes.card}>
                            <Link to='/products/reptil'>
                                <CardMedia
                                    className={classes.media}
                                    image={toString(product.imagens[0])}
                                    title="Contemplative Reptile"
                                />
                            </Link>
                            <CardContent>
                                <Link to='/products/reptil'>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        {product.nombre}
                                </Typography>
                                </Link>
                                <Typography component="p">
                                    {product.descripcion}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton size="small" color="secondary">
                                    <AddShoppingCart />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
})