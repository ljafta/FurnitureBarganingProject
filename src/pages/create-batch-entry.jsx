import {
  IonContent,
  IonButton,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonText,
  IonMenu
} from '@ionic/react';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Wrapper from '../components/wrapper';
import { HeaderNameContext } from '../context/hearder';
//import { Table } from 'semantic-ui-react'

//let backgroundColor = 'grey';
const columns = [
  { id: 'name', label: 'To Pay', minWidth: 50, align: 'left' },
  {
    id: 'captured',
    label: 'Captured',
    minWidth: 50,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'computed',
    label: 'Computed',
    minWidth: 50,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'values',
    label: 'Values',
    minWidth: 50,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'percentage',
    label: '%',
    minWidth: 50,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'allowed',
    label: '+- Allowed',
    minWidth: 50,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, captured, computed, values, percentage, allowed) {

  return { name, captured, computed, values, percentage, allowed };
}

const rows = [
  createData('To Pay(Cash Back)', 1324.11),
  createData('Holiday', 140.350),
  createData('Employee Gross Prov', 6048.73),
  createData('Employer Gross Prov', 3271.34),
  createData('Gross Sick Benefits', 3760.03),
  createData('Mortality', 769.24),
  createData('Council Levy', 769.24),
  createData('Trade Union', 769.24),
  createData('Agency Fee', 769.24),
  createData('Legal Expense Fee', 769.24),
  createData('Int Provident ', 769.24),
  createData('On Account', 769.24),
  createData('Interest', 769.24),
  createData('Fedgroup DDS', 769.24),
  createData('Sundries-2', 769.24),
  createData('Holiday', 769.24),
  createData('Gross provident -EE', 769.24),
  createData('Gross provident -ER', 769.24),
  createData('Gross- Benefit', 769.24),
  createData('Legal Exp Recovery', 769.24),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,

  },
  text:{
    fontWeight: "bold",
  },
  cell:{
    display: "flex",
    flexDirection: "row"
  },

});

export default function CreateBatchEntry() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  let backgroundColor = 'grey';
  const { ChangeheaderName } = React.useContext(HeaderNameContext);
  React.useEffect(() => {
    ChangeheaderName("Financial-Batch-Entry")
  }, [])


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
          <Table inverted>

            <TableHead>
              <div style={{ alignItems: 'center' }}>
                <TableRow  >
                  <TableCell > <Box className={classes.cell}><Typography className={classes.text}>Batch Number </Typography><Typography>: Tr 92 </Typography></Box></TableCell>
                  <TableCell ><Box className={classes.cell}><Typography className={classes.text}>Employer Number </Typography><Typography>: N0621 </Typography></Box></TableCell>
                  <TableCell ><Box className={classes.cell}><Typography className={classes.text}>Period </Typography><Typography>: 2020/06/01 </Typography></Box></TableCell>
                  
                </TableRow>
                <TableRow >
                <TableCell ><Box className={classes.cell}><Typography className={classes.text}>Type of Entry </Typography><Typography>: Contributions </Typography></Box></TableCell>
                <TableCell ><Box className={classes.cell}><Typography className={classes.text}>Employer Name</Typography><Typography>: KITCHEN CLASSIC </Typography></Box></TableCell>
                <TableCell ><Box className={classes.cell}><Typography className={classes.text}>Month Pay Refers: </Typography><Typography>: 2020/06/02 </Typography></Box></TableCell>
                
                </TableRow>
                <TableRow >
                <TableCell ><Box className={classes.cell}><Typography className={classes.text}>Trans/Payment Date</Typography><Typography>: 2020/07/29 </Typography></Box></TableCell>
                <TableCell ><Box className={classes.cell}><Typography className={classes.text}>Status</Typography><Typography>: Unknown </Typography></Box></TableCell>
                  {/* <TableCell>Trans/Payment Date: 2020/07/29</TableCell>
                  <TableCell>Status: Unknwon</TableCell> */}
                </TableRow>
              </div>
            </TableHead>
          </Table>
          <br></br>         
          <br></br>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <div>
              </div>            

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
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell >
                    <TextField
                      style={{ width: "8rem" }}
                      value={row.captured} /></TableCell>
                  <TableCell >{row.computed}</TableCell>
                  <TableCell >{row.values}</TableCell>
                  <TableCell >{row.percentage}</TableCell>
                  <TableCell >{row.allowed}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
       <div>
            <IonButton style={{ float: 'right' }} routerLink="./create-employer">Add Beneficiary </IonButton>
            <IonButton style={{ float: 'right' }} routerLink="./next-create-batch-entry">Next </IonButton>
            <IonButton style={{ float: 'right' }} >Save </IonButton>
          </div>
      </Paper>
    </Wrapper >
  );
}
