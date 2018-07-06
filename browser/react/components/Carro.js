import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ShopTwo from '@material-ui/icons/ShopTwo';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function CustomizedTable(props) {
  const { classes, data, address, total, handleAdd, handleSubstract, handleDrop, genOrder, emailFlag } = props;
  console.log('emailFlag : ', emailFlag);
  console.log('address : ', address);
  const genOrderFlag = (address.length > 10 && emailFlag) ? false : true;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Items</CustomTableCell>
            <CustomTableCell numeric>Precio (AR$)</CustomTableCell>
            <CustomTableCell numeric>Cantidad de Items</CustomTableCell>
            <CustomTableCell numeric>Subtotal (AR$)</CustomTableCell>
            <CustomTableCell numeric>Borrar Producto</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell component="th" scope="row">
                  {n.name}
                </CustomTableCell>
                <CustomTableCell numeric>
                  {n.precio}
                </CustomTableCell>
                <CustomTableCell>
                  <Button mini color="primary" aria-label="add" className={classes.button} onClick={handleAdd(n.id)}>
                    <ArrowUpward />
                  </Button>
                  <span className={classes.root}>{n.cantidad}</span>
                  <Button mini color="primary" aria-label="substract" className={classes.button} onClick={handleSubstract(n.id)}>
                    <ArrowDownward />
                  </Button>
                </CustomTableCell>
                <CustomTableCell numeric>{n.subtotal}</CustomTableCell>
                <CustomTableCell>
                  <Button aria-label="delete" className={classes.button} onClick={handleDrop(n.id)}>
                    <DeleteIcon />
                  </Button>
                </CustomTableCell>
              </TableRow>
            );
          })}
          <TableRow className={classes.row} key={'totales'}>
            <CustomTableCell component="th" scope="row">{'TOTALES'}</CustomTableCell>
            <CustomTableCell>{''}</CustomTableCell>
            <CustomTableCell numeric>{''}</CustomTableCell>
            <CustomTableCell numeric>{'TOTAL : '+total}</CustomTableCell>
            <CustomTableCell>
              <Button aria-label="shop" className={classes.button} disabled={genOrderFlag}>
                <ShopTwo onClick={genOrder}/>
              </Button>
            </CustomTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
