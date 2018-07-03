import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    container: {
        display: 'unset',
        flexWrap: 'wrap',
        float: 'left',
        marginTop: '4px'
    },
    margin: {
        margin: theme.spacing.unit,
    },


    bootstrapRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    bootstrapInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 14,
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
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
    bootstrapFormLabel: {
        fontSize: 12,
    },
});




export default withStyles(styles)(props => {
    const { classes, value } = props;

    return (
        <div className={classes.container}>

            <TextField

                id="bootstrap-input"
                value={value}
                onChange={props.onChange}
                placeholder="Search"
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
    )

});