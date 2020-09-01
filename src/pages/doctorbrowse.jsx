import {
  IonContent,
  IonButton,
  ionChange,
  IonText,
  IonInput,
  IonItem    
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
import Wrapper from '../components/wrapper';
import { HeaderNameContext } from '../context/hearder';

const columns = [
  { id: 'name', label: 'Doctor Code', minWidth: 50 },
    {
    id: 'population',
    label: 'Name',
    minWidth: 50,
    align: 'left',
    
  },
    {
    id: 'density',
    label: 'Type',
    minWidth: 50,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  
];

function createData(name, population, density) {
  
  return { name, population, density };
}

const rows = [
  createData('AO129', 'L.V jafta', 'GP'),
  createData('AO130', 'Thuso lop','GP' ),
  createData('AO131', 'N.J Viode', 'GP' ),
  createData('AO132', 'Comrade', 'GP'),
  createData('AO133', 'We think code', 'GP'),
  createData('AO134', 'Best school ever', 'GP' ),

];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowState, setRowState] = React.useState(rows);
  const {ChangeheaderName}=React.useContext(HeaderNameContext);
  React.useEffect(()=>{
    ChangeheaderName("Doctor-Overview")

  }, [])



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function FilterTableData(value){   

    const reg = /(^ao)/
  if (reg.test(value.toLowerCase())) {
     const data =rows.filter(row=>row.occupation.toLowerCase().includes(value.toLowerCase()));
     setRowState(data);
  } else {
    const data =rows.filter(row=>row.population.toLowerCase().includes(value.toLowerCase()));
    setRowState(data);
  }
  
  }

  return (
    <Wrapper >
    <Paper className={classes.root}>
    
      <TableContainer className={classes.container}>
      <input placeholder="Search..." onChange={(e)=>{FilterTableData(e.target.value)}}/>
      {/* <IonText placeholder="Search..." onChange={(e)=>{FilterTableData(e.target.value)}}></IonText> */}
   
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
        <div>
       <IonButton style={{float: 'right'}}  routerLink="./doctorbrowse">Create New </IonButton>
       <IonButton style={{float: 'right'}}  routerLink="./create">Print </IonButton>
      
       </div>
    </Paper>
    </Wrapper >
  );
}



