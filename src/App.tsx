

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

import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

// File imports

import EnhancedTable from './pages/load';
import FormPropsTextFields from './pages/create-employer';
import FinancialBatch from './pages/financials-batch-entry';
import NextCreateBatchEntry from './pages/next-create-batch-entry';
import FinalCreateBatchEntry from './pages/final-create-batch-entry';
import MaterialTableDemo from './pages/empol';
import SpanningTable from './pages/spanning';
import FormDocsTextFields from './pages/doctorbrowse';
import EmplyeeHeadTable from './pages/employee-browse';
import TableHeadTable from './pages/utilisationdetails';
import CreateBatchEntry from './pages/create-batch-entry'
import EmployerHeadTable from './pages/employer-employee';
import DenseTable from './pages/doctorbrowse';
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
          <Redirect exact path="/" to="/home"/>
            {/* <Route exact path="/home" component={PersistentDrawerLeft}/> */}
            <Route exact path="/doctorbrowse" component={DenseTable}/>
            {/* <Route exact path="/employe-enquire" component={MultilineTextFields}/>
            // <Route exact path="/employer-browse" component={MaterialTableDemo}/> */}
            <Route exact path="/load" component={EnhancedTable}/>
            <Route exact path="/employerbrowser" component={StickyHeadTable}/>
            <Route exact path="/employer-employee" component={EmployerHeadTable}/>
            <Route exact path="/utilisationdetails" component={TableHeadTable}/>
            <Route exact path="/create-batch-entry" component={CreateBatchEntry}/>
            <Route exact path="/employee-browse" component={EmplyeeHeadTable}/>
            <Route exact path="/create-employer" component={FormPropsTextFields}/>
            <Route exact path="/doctorbrowse" component={FormDocsTextFields}/>
            <Route exact path="/financials-batch-entry" component={FinancialBatch}/>
            <Route exact path="/empol" component={MaterialTableDemo}/>
            <Route exact path="/spanning" component={SpanningTable}/>
            <Route exact path="/next-create-batch-entry" component={NextCreateBatchEntry}/>
            <Route exact path="/final-create-batch-entry" component={FinalCreateBatchEntry}/>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
    </HeaderController>
    </AppMenuController>
  
  )
}
export default App;