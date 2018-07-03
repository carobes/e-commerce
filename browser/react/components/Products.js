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
    const { classes } = props
    return (
        <div>
            <Grid container spacing={16}>
                {[0, 1, 3].map(value => (
                    <Grid key={value} item xs={4}>

                        <Card className={classes.card}>
                            <Link to='/products/reptil'>
                                <CardMedia
                                    className={classes.media}
                                    image="/img/NIK_9984_edited_nik_800.jpg"
                                    title="Contemplative Reptile"
                                />
                            </Link>
                            <CardContent>
                                <Link to='/products/reptil'>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        Lizard
                                </Typography>
                                </Link>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
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
