import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Input from './Input'
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core';

const styles = {
    root: {
        float: 'right'
    },
}
export default withStyles(styles)(props => {
    const { classes } = props
    return (
        <div >
            <form onSubmit={props.handleSubmit}>
                <div>

                    <Input type="text" value={props.search} placeholder="Search" onChange={props.setSearch} />

                    <IconButton type="submit"  >
                        <SearchIcon />
                    </IconButton>

                </div>

            </form>

        </div>
    );
})
