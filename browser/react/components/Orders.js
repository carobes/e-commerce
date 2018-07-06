import React from "react";
import PropTypes from "prop-types";
import { Typography, Card, CardContent } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import IdUserCard from './IdUserCard';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#75b8eb",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);


const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 900,
    marginTop: 25  
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  card: {
    minWidth: 345,
    height: 185,
    maxWidth: 315,
  },
  card2: {
    minWidth: 255,
    height: 155,
    Width: 375,
    float: 'right',
  },
  title: {
    marginBottom: 8,
    fontSize: 18,
    color: "#808080"
  },
  pos: {
    marginTop: 18
  },
  pos2: {
    textAlign: 'right',
    fontSize: 18
  },  
  avatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: "#6eb4ea",
    float: "left",
    width: "75px",
    height: "75px"
  },
  rowAvatar: {
    display: "flex",
    float: "right"
  },
  buttonsFilter: {
    backgroundColor: '#6eb4ea',
    color: 'white',
    '&:hover': {
        color: 'white'
    }
}
});


function CustomizedTable({ classes, orders }) {
  const { productosOrdens, status, usuario } = orders; 
  const pO = !productosOrdens ? [] : productosOrdens;
  const usu = !usuario ? {} : usuario;


  return (
    <div>
      <br />
      {/* <Card className={classes.card}>
        <div className={classes.rowAvatar}>
          <Avatar className={classes.avatar}>
            {usu.nombre + usu.apellido}
          </Avatar>
        </div>
        <br />
        <CardContent>
          <Typography className={classes.pos} variant="headline" component="h1">
            {user.nombre}
          </Typography>
          <Typography variant="headline" component="h2">
            {user.apellido}
          </Typography>
          <br/>
          <Typography
            className={classes.title}
            variant="headline"
            component="h2"
          >
           mail: {order.mail}
          </Typography>
        </CardContent>
      </Card> */}
      <IdUserCard user={usu}/>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell></CustomTableCell>
              <CustomTableCell>Usuario</CustomTableCell>
              <CustomTableCell>Fecha de la Orden</CustomTableCell>
              <CustomTableCell>Número de Orden</CustomTableCell>
              <CustomTableCell numeric> Total (en $)</CustomTableCell>
              <CustomTableCell numeric>Status</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {orders.map(data => (
                <TableRow className={classes.row} key={data.id}>
                  <CustomTableCell>  <div className={classes.rowAvatar}><Avatar className={classes.avatar}>
{data.usuario.nombre[0] + data.usuario.apellido[0]}</Avatar></div></CustomTableCell>
                  <CustomTableCell>{data.usuario.nombreApellido}</CustomTableCell>
                  <CustomTableCell>{data.fecha}</CustomTableCell>
                  <CustomTableCell numeric>
                    {data.id}
                  </CustomTableCell>
                  <CustomTableCell numeric>
                    {data.cantidad}
                  </CustomTableCell>
                  <CustomTableCell>{data.status.estado}</CustomTableCell>
                </TableRow>
                    ))}
          </TableBody>
        </Table>
      </Paper>
      <br/>
      {/* <TablePagination
          component="div"
          count={data.length} 
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        /> */}
      {/* <Card className={classes.card2}>
        <br />
        <CardContent>
          <Typography className={classes.pos2} variant="headline" component="h2">
            Total: $ 
         </Typography>
          <Typography className={classes.pos2} variant="headline" component="h1">
            Status: {stat.estado}
          </Typography>
          <Typography className={classes.pos2} variant="headline" component="h1">
            mail de envío: {order.mail}
          </Typography>
          <Typography className={classes.pos2} variant="headline" component="h1">
            dirección de envío: {order.direccion}
          </Typography>
          <br />
        </CardContent>
      </Card> */}
    </div>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
