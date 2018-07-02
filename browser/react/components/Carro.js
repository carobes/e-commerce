import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CarritoTabs from './CarritoTabs';

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

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Computador Portatil Lenovo', 159, 1, 159, 6),
  createData('Camara Fotografica Cannon', 237, 1, 237, 4.3),
  createData('Bolso Playero', 262, 1, 262, 6.0),
  createData('Pedazo de Bosta', 305, 1, 305, 4.3),
  createData('Camisa con mangas largas JH', 356, 1, 356, 3.9),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Items</CustomTableCell>
            <CustomTableCell numeric>Precio (AR$)</CustomTableCell>
            <CustomTableCell numeric>Cantidad</CustomTableCell>
            <CustomTableCell numeric>Subtotal (AR$)</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell component="th" scope="row">
                  {n.name}
                </CustomTableCell>
                <CustomTableCell numeric>{n.calories}</CustomTableCell>
                <CustomTableCell numeric>{n.fat}</CustomTableCell>
                <CustomTableCell numeric>{n.carbs}</CustomTableCell>
              </TableRow>
            );
          })}
          <TableRow className={classes.row} key={'totales'}>
            <CustomTableCell component="th" scope="row">
              TOTALES
            </CustomTableCell>
            <CustomTableCell numeric>{''}</CustomTableCell>
            <CustomTableCell numeric>{'Suma Items'}</CustomTableCell>
            <CustomTableCell numeric>{'TOTAL'}</CustomTableCell>
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
