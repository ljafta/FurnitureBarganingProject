import {
  IonContent,
  IonButton,
  ionChange,
  IonInput,
  IonText

} from '@ionic/react';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Wrapper from '../components/wrapper';
import { HeaderNameContext } from '../context/hearder';
import InputBase from '@material-ui/core/InputBase';

const columns = [
  { id: 'name', label: 'Benefit Number', minWidth: 50 },
  {
    id: 'population',
    label: 'Surname',
    minWidth: 20,
    minHeight: 20,
    align: 'left',
  },
  {
    id: 'firstname',
    label: 'Firstname',
    minWidth: 20,
    minHeight: 20,
    align: 'left',
  },
  {
    id: 'idnumber',
    label: 'ID Number',
    minWidth: 20,
    minHeight: 50,
    align: 'left',
    format: (value) => value.toFixed(2),
  },

];

function createData(name, population, firstname, idnumber) {

  return { name, population, firstname, idnumber };
}

const rows = [
  createData('1400276', 'Sign', 'Jafta', '787245932322'),
  createData('1400316', 'Mkhize', 'Nguni', '797245932322'),
  createData('1400417', 'NCheety', 'Siza', '767245932322'),
  createData('1400517', 'Jutu', 'Toets', '777245932322'),
  createData('1400518', 'Lumkile', 'More', '727245932322'),
  createData('14006120', 'Trevor', 'Paul', '717245932322'),

];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function EmplyeeHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowState, setRowState] = React.useState(rows);
  const { ChangeheaderName } = React.useContext(HeaderNameContext);
  React.useEffect(() => {
    ChangeheaderName("Employee-Overview")

  }, [])


  function FilterTableData(value) {

    const reg = /(^a0)(?:\D*\d){3}/
    if (reg.test(value.toLowerCase())) {
      const data = rows.filter(row => row.name.toLowerCase().includes(value.toLowerCase()));
      setRowState(data);
    } else {
      const data = rows.filter(row => row.population.toLowerCase().includes(value.toLowerCase()));
      setRowState(data);
    }
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Wrapper >
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <input className={classes.input} placeholder="Search..." onChange={(e) => { FilterTableData(e.target.value) }} />
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowState.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                          {/* <input
                            type='text'
                           
                             /> */}

                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rowState.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <IonButton style={{ float: 'right' }} routerLink="./create-employer">Create New </IonButton>

      </Paper>
    </Wrapper >
  );
}
