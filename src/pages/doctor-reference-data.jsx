import {
  IonContent,
  IonButton,
  IonModal,
  IonFabButton,
  IonIcon,
  IonText,
  IonInput,
  IonItem,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonCard,
  IonRow,
  IonLabel,
  IonSelectOption,
  IonSelect,
  ionChange,
  onIonChange,
  IonList,
  IonFab,
} from '@ionic/react';
import {trash, create} from 'ionicons/icons';
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
import {getData} from '../components/UseThings';
import EditDocRefData from '../components/EditDocRefData';
import axios from 'axios';
import Swal from 'sweetalert2';
import useThings from '../components/UseThings';
import {Satellite} from '../../node_modules/@material-ui/icons';
import {useParams} from 'react-router';

// import { IonSpinner } from '@ionic/react';

const columns = [
  {id: 'name', label: 'Short Code', minWidth: 50},
  {
    id: 'desc',
    label: 'Description',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'sort',
    label: 'Sort',
    minWidth: 50,
    align: 'left',
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 10,
    minHeight: 10,
    align: 'left',
  },
];

function createData(name, desc, sort, contact) {
  return {name, desc, sort, contact};
}

const rows = [
  createData('GP', 'General Practioner', '1', '011155'),
  createData('GS', 'General Surgen', '2', '0256223'),
  createData('GP', 'General Physcholigist', '3', '0215899'),
  createData('GD', 'General Dentist', '4', '031589'),
  createData('GO', 'General Optometrist', '5', '0458977'),
];

// const responseJson = [
//   componentDidMount()
// ]

const styles = {
  tooltip: {
    fontSize: 15,
  },
};

const CustomTooltip = withStyles(styles)(Tooltip);

const useStyles = makeStyles({
  root: {
    width: '0%',
  },
  alignment: {
    align: 'left',
  },
  container: {
    maxHeight: 440,
  },
  size: {
    maxHeight: 5,
    color: 'black',
    width: '100%',
    spacing: 0,
    align: 'left',
  },

  ItemSpace: {
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0,
  },

  table: {
    minWidth: 650,
  },
});

export default function DoctorEnquire() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowState, setRowState] = React.useState();
  const {ChangeheaderName} = React.useContext(HeaderNameContext);
  const {id} = useParams();

  React.useEffect(() => {
    ChangeheaderName('Doctor-Reference Data');
  }, []);

  const [modalInfo, setModalInfo] = useState({isVisible: false, value: ''});

  const endpoint = `http://dummy.restapiexample.com/api/v1/employees`;

  let {state, dispatch} = UseThings();

  const [loading, setLoading] = useState(false);

  const endpointget = 'http://dummy.restapiexample.com/api/v1/employees';

  const url =
    'https://3zpjzh9s97.execute-api.eu-west-1.amazonaws.com/dev/doctortype';

  async function getData() {
    await axios.get(url).then((response) => {
      setRowState(response.data);
    });
  }
  React.useEffect(() => {
    getData();
  }, []);

  /**
   * update an existing entry in the list based on data
   * and the index of the entry
   * @param {*} _index
   * @param {*} _data
   */
  // const editEntry = (_index, _data) => {
  //   let payload = {index: _index, data: _data};

  //   dispatch({type: 'EDIT_THING', ...payload});
  // };

  const editEntry = async (_index, _data) => {
    try {
      console.log('data updating ', _index, _data);

      const response = await axios.put(
        `https://3zpjzh9s97.execute-api.eu-west-1.amazonaws.com/dev/doctortype/?id=${_index}`,
        _data
      );

      if (response) {
        const payload = {index: _index, data: _data};

        const stateData = [...rowState];
        stateData[_index] = _data;

        setRowState(stateData);
      } else {
        alert('Something went wrong while updating user details');
      }
    } catch (error) {
      console.log('Error: ', error);
      // dispatch(error);
    }
  };

  // const addNewEntry = (_data) => {
  //     Swal.fire({
  //     title: 'Success',
  //     type: 'success',
  //     text: 'Your work has been saved.',
  //   });
  //   dispatch({type: 'ADD_THING', data: _data});
  // };
  const addNewEntry = async (data) => {
    try {
      
      const response = await axios.post(
        'https://3zpjzh9s97.execute-api.eu-west-1.amazonaws.com/dev/doctortype/', data);
        Swal.fire({
              title: 'Success',
              type: 'success',
              text: 'Your work has been saved.',
            });

      if (response) {
        const stateData = [...rowState];
        stateData.push(data);
        setRowState(stateData);
      } else {
        alert('Something went wrong while adding ');
      }
    } catch (error) {
      // dispatch(error);
      console.log('Error: ', error);
      alert('Something went wrong while adding user details ', error.message);

    }
  };

  // const deleteEntry = (_index) => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
  //       dispatch({type: 'DELETE_THING', index: _index});
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //       Swal.fire('Cancelled', 'Record NOT deleted :)', 'error');
  //     }
  //   });
  //   // alert(JSON.stringify("Are you sure you want to reamve: " + _index));
  // };

  const deleteEntry = async (id) => { 
    try {
      
      const response = await axios.delete(`https://3zpjzh9s97.execute-api.eu-west-1.amazonaws.com/dev/doctortype/?id=${id}`);
      Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
          }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                // dispatch({type: 'DELETE_THING', index: _index});
                let stateData = [...rowState];
                stateData = stateData.filter(state => state.Id != id)
                setRowState(stateData);
                
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Record NOT deleted :)', 'error');
              }
            });
    
    } catch (error) {
      alert('Something went wrong while Deleting user details ', error.message);
      
    }
  };


  const [type, setType] = useState();

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
    setModalInfo({...modalInfo, isVisible: false, value: ''});
  };
  //toggle dropsownlist
  function toggle(event) {
    setType(event.target.value);
  }

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
        row.desc.toLowerCase().includes(value.toLowerCase())
      );
      setRowState(data);
    }
  }
  //console.log("rowstae", rowState)
  return (
    <IonContent padding> 
      <Wrapper>

        {/* <IonItem>
          <IonSpinner />

        </IonItem> */}
        <IonItem>
          <IonLabel>Reference Data</IonLabel>

          <IonSelect value={type} placeholder="Select One" onIonChange={toggle}>
            <IonSelectOption value="Dr">Doctor Type</IonSelectOption>
            {/* <IonSelectOption value="Surgeon">Surgeon</IonSelectOption>
                  <IonSelectOption value="Specialist">Specialist</IonSelectOption>
                  <IonSelectOption value="Pyschologist">Pyschologist</IonSelectOption> */}
          </IonSelect>
        </IonItem>
        <EditDocRefData
          initValue={modalInfo}
          handleFormSubmit={handleFormSubmit}
        />

        <div style={{padding: 10}}>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Doctor Reference Data</IonCardTitle>
              <IonCardSubtitle></IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent></IonCardContent>
          </IonCard>
          {/* <IonCard>
          <IonCardContent>        
            
             <IonRow>
              {columns.map((column) => (
                <IonInput
                  key={column.id}
                   align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={classes.size}
                >
                  {column.label}
                </IonInput>
              ))}
             </IonRow>                            

            <IonList>
              {state.things.map((_thing, _index) => {
                
                return(
                <IonItem key={_thing.id} >
                   <IonLabel className="ion-text-wrap">{_thing.name}</IonLabel>
                   <IonLabel className="ion-text-wrap">{_thing.desc}</IonLabel>
                   <IonLabel className="ion-text-wrap">{_thing.sort}</IonLabel>         

                   <IonButton title="Edit" onClick={() => modalInfoWithEntry(_thing, _index)}>
                    <IonIcon icon={create}></IonIcon>
                   </IonButton>
                                          
                  
                    <IonButton title="Delete"  onClick={() => deleteEntry(_index)}>
                    <IonIcon icon={trash}></IonIcon>
                   </IonButton>                         
                </IonItem>
              )})}
            </IonList>           
            <p>
              <IonButton onClick={() => modalInfoWithEntry()}>
                Create New Entry
              </IonButton>
            </p>           
          </IonCardContent>
        </IonCard> */}

          {type && (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowState &&
                    rowState.map((_thing, _index) => {
                      console.log('_thing', _thing);
                      return (
                        <TableRow key={_thing.id}>
                          {/* <IonInput className={classes.size} type="text" value={_thing.name} name="name" />
                 <IonInput className={classes.size} type="text" value={_thing.desc} desc="name" />
                 <IonInput className={classes.size} type="text" value={_thing.sort} sort="name" /> */}

                          <TableCell className="ion-text-wrap">
                            {_thing.Name}
                          </TableCell>
                          <TableCell className="ion-text-wrap">
                            {_thing.Description}
                          </TableCell>
                          <TableCell className="ion-text-wrap">
                            {_thing.SortOrder}
                          </TableCell>

                          <TableCell>
                            <IonButton
                              title="Edit"
                              onClick={() => modalInfoWithEntry(_thing, _index)}
                            >
                              <IonIcon icon={create}></IonIcon>
                            </IonButton>
                            <IonButton
                              title="Delete"
                              onClick={() => deleteEntry(_thing.Id)}
                            >
                              <IonIcon icon={trash}></IonIcon>
                            </IonButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {/* {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">Calories</TableCell>
              <TableCell align="left">Calories</TableCell>
              <TableCell align="left">Calories</TableCell>
            </TableRow>
          ))} */}

                  <p>
                    <IonButton onClick={() => modalInfoWithEntry()}>
                      Create New Entry
                    </IonButton>
                  </p>
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </Wrapper>
    </IonContent>
  );
}
