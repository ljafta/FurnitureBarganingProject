import {
  IonContent,
  IonButton,
  IonModal,
  IonFabButton,
  IonIcon,
  IonText,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonFab,
} from '@ionic/react';
import {camera, trash, close, create, cloudDownloadSharp} from 'ionicons/icons';
//import { Tooltip } from 'ionic-tooltips';
import {Tooltip} from '@progress/kendo-react-tooltip';
import React, {useState} from 'react';
import ReactTooltip from 'react-tooltip';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from '@material-ui/core/Link';
//import Tooltip from "@material-ui/core/Tooltip";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Wrapper from '../components/wrapper';
import {HeaderNameContext} from '../context/hearder';
import Modal from '../components/Modal';
import UseThings from '../components/UseThings';
import EditThings from '../components/EditThings';
import {useParams} from 'react-router';

import axios from 'axios';

const columns = [
  {id: 'name', label: 'Employer Code', minWidth: 50},
  {
    id: 'population',
    label: 'Name',
    minWidth: 50,
    align: 'left',
  },
  {
    id: 'density',
    label: 'Status',
    minWidth: 50,
    align: 'left',
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 10,
    minHeight: 10,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];

const styles = {
  tooltip: {
    fontSize: 15,
  },
};

function createData(name, population, density, action) {
  return {name, population, density};
}

const rows = [
  createData('AO129', 'ABSA PTY', 'Closed(2010/10/15)'),
  createData('AO130', 'NUFASWA PTY', 'Active-from(2010/10/15)'),
  createData('AO131', 'NUFASWA PTY', 'Active-from(2010/10/15)'),
  createData('AO132', 'NUFASWA PTY', 'Closed(2010/10/12)'),
  createData('AO133', 'jAFTA LTD', 'Active(2010/10/17)'),
  createData('AO134', 'jAFTA LTD', 'Closed(2010/10/11)'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },

  container: {
    maxHeight: 440,
  },
  size: {
    maxHeight: 5,
    color: 'black',
    width: '20%',
    spacing: 1,
  },
});

export default function DoctorEnquire() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowState, setRowState] = React.useState(rows);
  const {ChangeheaderName} = React.useContext(HeaderNameContext);
  const {id} = useParams();

  React.useEffect(() => {
    ChangeheaderName('Employer-Overview');

    componentgetAll();
  }, []);

  const endpointget = `http://dummy.restapiexample.com/api/v1/employees`;

  async function componentgetAll() {
    const res = await axios.get(endpointget);
    setRowState(res.data.data);
    console.log('res', res.data.data);
  }

  //const  endpointdel  =  `http://dummy.restapiexample.com/api/v1/delete/${id}`;

  async function componentDel() {
    try {
      debugger;
      const res = await axios.delete(
        `http://dummy.restapiexample.com/api/v1/delete/${id}`
      );
      setRowState(res.data.data);
      console.log('res', res.data);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  }

  let {state, dispatch} = UseThings();

  const editEntry = (columns, rows) => {
    // debugger;
    let payload = {index: columns, data: rows};
    dispatch({type: 'EDIT_THING', ...payload});
  };

  const [modalInfo, setModalInfo] = useState({isVisible: false, value: ''});

  const addNewEntry = (_data) => {
    //debugger;
    dispatch({type: 'ADD_THING', data: _data});
  };

  const deleteEntry = (_index) => {
    console.log(_index);
    dispatch({type: 'DELETE_THING', index: _index});
  };

  const modalInfoWithEntry = (_entryValue, _index) => {
    //debugger;
    setModalInfo({isVisible: true, value: _entryValue, index: _index});
  };

  const handleFormSubmit = (_formResponse) => {
    if (_formResponse.value) {
      modalInfo.index != null
        ? editEntry(modalInfo.index, _formResponse.value)
        : addNewEntry(_formResponse.value);
    }
    // reset the mondalInfo state
    setModalInfo({...modalInfo, isVisible: false, value: []});
  };

  const [showModal, setShowModal] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function FilterTableData(value) {
    const reg = /(^ao)/;
    if (reg.test(value.toLowerCase())) {
      const data = rows.filter((row) =>
        row.occupation.toLowerCase().includes(value.toLowerCase())
      );
      setRowState(data);
    } else {
      const data = rows.filter((row) =>
        row.population.toLowerCase().includes(value.toLowerCase())
      );
      setRowState(data);
    }
  }

  return (
    <IonContent>
      <Wrapper>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <input
              placeholder="Search..."
              onChange={(e) => {
                FilterTableData(e.target.value);
              }}
            />
            {/* <IonText placeholder="Search..." onChange={(e)=>{FilterTableData(e.target.value)}}></IonText> */}

            <Table stickyHeader aria-label="sticky table">
              <EditThings
                initValue={modalInfo}
                handleFormSubmit={handleFormSubmit}
              />

              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{minWidth: column.minWidth}}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rowState && rowState.map((row) => (
                  <TableRow key={row.id} className={classes.size}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell> {row.employee_name}</TableCell>
                    <TableCell>{row.employee_salary} </TableCell>
                    <TableCell>
                      <div>
                        <IonModal isOpen={showModal} cssClass="my-custom-class">
                          <Modal></Modal>
                          <IonButton onClick={() => setShowModal(false)}>
                            Close
                          </IonButton>
                        </IonModal>
                        <IonButton
                          title="Edit"
                          routerLink={`/employer-details/${row.id}`}
                        >
                          {/* <IonButton title="Edit"  routerLink={"/doctor-details/"+ row.id}> */}

                          <IonIcon icon={create}></IonIcon>
                        </IonButton>
                        {/* <IonButton  title="Edit" onClick={() => alert("Are you sure you want delete this record " + row.name)} routerLink="./doctor-enquire">
                    <IonIcon icon={create}></IonIcon>
                  </IonButton>*/}

                        {/* //componentDel */}
                        <IonButton
                          title="Delete"
                          onClick={() => componentDel(row.id)}
                        >
                          <IonIcon icon={trash}></IonIcon>
                        </IonButton>
                        <IonButton
                          title="Print"
                          onClick={() => componentDel(row.id)}
                        >
                          <IonIcon icon={cloudDownloadSharp}></IonIcon>
                        </IonButton>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[25, 100]}
            component="div"
            count={rowState.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
          <div>
            <IonButton
              style={{float: 'right'}}
              routerLink="./create-employer-form"
            >
              Create New
            </IonButton>
            <IonButton style={{float: 'right'}} routerLink="./create">
              Print{' '}
            </IonButton>
          </div>
        </Paper>
      </Wrapper>
    </IonContent>
  );
}

// import {
//   IonContent,
//   IonButton,
//   ionChange,
//   IonInput,
//   IonText

// } from '@ionic/react';

// import React from 'react';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
// import EditIcon from '@material-ui/icons/Edit';
// import Tooltip from "@material-ui/core/Tooltip";

// import Link from '@material-ui/core/Link';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import Button from '@material-ui/core/Button';
// import Wrapper from '../components/wrapper';
// import { HeaderNameContext } from '../context/hearder';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import IconButton from '@material-ui/core/IconButton';
// import Icon from "react-crud-icons";

// const columns = [
//   { id: 'name', label: 'Employer Code', minWidth: 10 },
//     {
//     id: 'population',
//     label: 'Employer Name',
//     minWidth: 10,
//     minHeight: 10,
//     align: 'left',

//   },
//     {
//     id: 'density',
//     label: 'Status',
//     minWidth: 10,
//     minHeight: 10,
//     align: 'left',
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: 'action',
//     label: 'Action',
//     minWidth: 10,
//     minHeight: 10,
//     align: 'left',
//     format: (value) => value.toFixed(2),
//   },

// ];

// function createData(name, population, density, action) {

//   return { name, population, density };
// }

// const rows = [
//   createData('AO129', 'ABSA PTY', 'Closed(2010/10/15)'),
//   createData('AO130', 'NUFASWA PTY','Active-from(2010/10/15)' ),
//   createData('AO131', 'NUFASWA PTY', 'Active-from(2010/10/15)' ),
//   createData('AO132', 'NUFASWA PTY', 'Closed(2010/10/12)'),
//   createData('AO133', 'jAFTA LTD', 'Active(2010/10/17)'),
//   createData('AO134', 'jAFTA LTD', 'Closed(2010/10/11)' ),

// ];

// const styles = {
//   tooltip: {
//     fontSize: 15,
//   }
// };

// const CustomTooltip = withStyles(styles)(Tooltip);

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//   },
//   container: {
//     maxHeight: 440,
//   },
//   size: {
//     maxHeight: 5,
//     color: 'black',
//     width: '20%',
//     spacing: 1,
//   }

// });

// export default function StickyHeadTable() {
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [rowState, setRowState] = React.useState(rows);
//   const {ChangeheaderName}=React.useContext(HeaderNameContext);
//   React.useEffect(()=>{
//     ChangeheaderName("Employer-Overview")

//   }, [])

//   function FilterTableData(value) {

//     const reg = /(^a0)(?:\D*\d){3}/
//     if (reg.test(value.toLowerCase())) {
//       const data = rows.filter(row => row.name.toLowerCase().includes(value.toLowerCase()));
//       setRowState(data);
//     } else {
//       const data = rows.filter(row => row.population.toLowerCase().includes(value.toLowerCase()));
//       setRowState(data);
//     }
//   }
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   const handleEdit = values => {
//     console.log("The Values that you wish to edit ", values);
//   };

//   return (
//     <Wrapper >
//     <Paper className={classes.root}>
//       <TableContainer className={classes.container}>
//       <input className={classes.input} placeholder="Search..." onChange={(e) => { FilterTableData(e.target.value) }} />
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//             <TableBody>
//             {rows.map(row => (
//               <TableRow key={row.name} className={classes.size}>
//                 <TableCell  component="th" scope="row" >
//                 <Link href="#" >
//                 {row.name}
//                 </Link>
//                 </TableCell>
//                 <TableCell > {row.population}</TableCell>
//                 <TableCell >{row.density} </TableCell>
//                 <TableCell >
//                  {/* <Icon
//                   name = "AiTwotoneEdit"
//                   tooltip = "AiTwotoneEdit"
//                   theme = "light"
//                   size = "small"
//                 />                */}
//                 <div>
//                 <CustomTooltip title="Edit" >
//                   <IconButton aria-label="Edit">
//                     <EditIcon onClick={() => alert("Are you sure you want delete this record " + row.name)} />
//                   </IconButton>
//                 </CustomTooltip>
//                 <CustomTooltip title="Delete">
//                   <IconButton aria-label="delete">
//                     <DeleteSweepIcon onClick={() => alert("Are you sure you want delete this record " + row.name)}  routerLink="./create-employer" />
//                   </IconButton>
//                 </CustomTooltip>

//                     </div>
//                   {/* <div>
//                    <IonButton aria-label="delete" onClick={() => alert("Edit this Record " + row.name)}  routerLink="./create-employer">
//                     Edit
//                   </IonButton>
//                   <IonButton aria-label="edit" onClick={() => alert("Are you sure you want delete this record " + row.name)}>
//                     Delete
//                   </IonButton>
//                   </div> */}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rowState.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onChangePage={handleChangePage}
//         onChangeRowsPerPage={handleChangeRowsPerPage}
//       />
//       <IonButton style={{float: 'right'}}  routerLink="./create-employer">Create New </IonButton>

//     </Paper>
//     </Wrapper >
//   );
// }
