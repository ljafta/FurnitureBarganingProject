import Page from './pages/Page';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import React from 'react';
import PersistentDrawerLeft from './components/swap';

// import PersistentDrawerLeft from './components/shift';

import {IonApp, IonRouterOutlet, IonSplitPane} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {Redirect, Route} from 'react-router-dom';

// File imports
import Tested from './pages/test';

import SharedReferenceData from './pages/shared-reference-data';
import EmployeeReferenceData from './pages/employee-reference-data';
import EmployerReferenceData from './pages/employer-reference-data';
import DoctorEnquire from './pages/doctorbrowse';
import CreateEmployer from './pages/create-employer-form';
import CreateEmployee from './pages/create-employee-form';
import CreateDoc from './pages/create-doct-form';
import EmployerDetails from './pages/employer-details';
import DoctorDetails from './pages/doctor-details';
import CreateDoctor from './pages/create-doctor';
import Comp from './pages/comp';
import DoctorReference from './pages/doctor-reference-data';
import EnhancedTable from './pages/load';
import FormPropsTextFields from './pages/create-employer';
import FinancialBatch from './pages/financials-batch-entry';
import NextCreateBatchEntry from './pages/next-create-batch-entry';
import FinalCreateBatchEntry from './pages/final-create-batch-entry';
// import FormDocsTextFields from './pages/doctorbrowse';
import EmplyeeHeadTable from './pages/employee-browse';
import TableHeadTable from './pages/utilisationdetails';
import CreateBatchEntry from './pages/create-batch-entry';
import EmployerHeadTable from './pages/employer-employee';
// import DenseTable from './pages/doctorbrowse';
import StickyHeadTable from './pages/employerbrowser';
import AppMenuController from './context/appMenuContext';
import HeaderController from './context/hearder';

function App() {
  return (
    <AppMenuController>
      <HeaderController>
        <IonApp>
          <IonReactRouter>
            <PersistentDrawerLeft />

            <IonSplitPane contentId="main">
              <IonRouterOutlet id="main">
                <Redirect exact path="/" to="/home" />

                {/* <Route exact path="/home" component={PersistentDrawerLeft}/> */}
                {/* <Route exact path="/doctorbrowse" component={DenseTable}/> */}

                <Route exact path="/load" component={EnhancedTable} />
                <Route
                  exact
                  path="/employerbrowser"
                  component={StickyHeadTable}
                />
                <Route
                  exact
                  path="/employer-employee"
                  component={EmployerHeadTable}
                />
                <Route
                  exact
                  path="/utilisationdetails"
                  component={TableHeadTable}
                />
                <Route
                  exact
                  path="/create-batch-entry"
                  component={CreateBatchEntry}
                />
                <Route
                  exact
                  path="/employee-browse"
                  component={EmplyeeHeadTable}
                />
                <Route
                  exact
                  path="/create-employer"
                  component={FormPropsTextFields}
                />
                {/* <Route exact path="/doctorbrowse" component={FormDocsTextFields}/> */}
                <Route
                  exact
                  path="/financials-batch-entry"
                  component={FinancialBatch}
                />
                <Route
                  exact
                  path="/next-create-batch-entry"
                  component={NextCreateBatchEntry}
                />
                <Route
                  exact
                  path="/final-create-batch-entry"
                  component={FinalCreateBatchEntry}
                />
                <Route
                  exact
                  path="/employee-reference-data"
                  component={EmployeeReferenceData}
                />
                <Route
                  exact
                  path="/shared-reference-data"
                  component={SharedReferenceData}
                />
                <Route
                  exact
                  path="/employer-reference-data"
                  component={EmployerReferenceData}
                />
                <Route
                  exact
                  path="/doctor-reference-data"
                  component={DoctorReference}
                />
                <Route exact path="/create-doct-form" component={CreateDoc} />
                <Route
                  exact
                  path="/create-employer-form"
                  component={CreateEmployer}
                />
                <Route
                  exact
                  path="/create-employee-form"
                  component={CreateEmployee}
                />
                <Route exact path="/test" component={Tested} />
                {/* <Route exact path={`${"/doctor-details"}/:id`}component={DoctorDetails}/> */}
                {/* <Route exact path="/doctor-details/:1" component={DoctorDetails}/>  */}

                <Route
                  exact
                  path="/employer-details/:id"
                  component={EmployerDetails}
                />
                <Route
                  exact
                  path="/doctor-details/:Id"
                  component={DoctorDetails}
                />
                <Route exact path="/comp" component={Comp} />
                <Route exact path="/create-doctor" component={CreateDoctor} />
                <Route exact path="/doctorbrowse" component={DoctorEnquire} />
              </IonRouterOutlet>
            </IonSplitPane>
          </IonReactRouter>
        </IonApp>
      </HeaderController>
    </AppMenuController>
  );
}
export default App;
