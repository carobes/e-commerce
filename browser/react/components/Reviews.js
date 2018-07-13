import React from 'react';
import { Typography, Card, CardMedia, CardContent, CardActions, Grid, IconButton } from '@material-ui/core'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import Star from '@material-ui/icons/Star'
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    card: {
        maxWidth: 345,
        minWidth: 345,
        marginBottom: 12,

    },
    bootstrapInput: {
        borderRadius: 4,
        border: '1px solid #ced4da',
        fontSize: 14,
        padding: '10px 12px',
        width: '280px',
        marginBottom: 15,
        marginLeft: 15,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        height: 300,
        maxWidth: 345,
        float: 'left',

    },

    title: {
        marginBottom: 16,
        fontSize: 18,
    },
    pos: {
        marginBottom: 12,
    },
    buttonStar: {
        color: "#D7DF01"
    },
}

export default withStyles(styles)(props => {
    const { classes } = props

    return (
        <div>

            <Grid item xs={9}>
                <Card className={classes.card}>
                    <div className={classes.root}>
                        <div className={classes.row}>
                            <CardContent>
                                <Typography className={classes.title} variant="headline" component="h1">
                                    Comentarios:
                            </Typography>
                                {!props.reviews ? 'loading...' : props.reviews.map(data => (
                                    <Typography key={data.id} component="p">
                                        {data.comentario}
                                    </Typography>
                                ))}
                            </CardContent>
                        </div>
                    </div>
                    <form onSubmit={props.handleSubmit}>
                        <div>
                            <TextField
                                id="bootstrap-input"
                                value={props.coment}
                                onChange={props.setComent}
                                placeholder="Comment"
                                InputProps={{
                                    disableUnderline: true,
                                    classes: {
                                        root: classes.bootstrapRoot,
                                        input: classes.bootstrapInput,
                                    },
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                    className: classes.bootstrapFormLabel,
                                }}
                            />
                        </div>
                    </form>

                </Card>
            </Grid>
        </div >
    )
})
