import React, { Component } from 'react';
import PersistentDrawerLeft from './components/swap';
//import enquiries from './components/enquiries';
import {  Router } from 'react-router';
import { createBrowserHistory } from 'history';
import Routes from './routes/Routes';
import ReactGA from 'react-ga';

const history = createBrowserHistory();
history.listen((location)=>{
ReactGA.set({page:location.pathname})
ReactGA.pageview(location.pathname);
})

function App() {
  return (
    <div>
     <PersistentDrawerLeft /> 
      <Router history={history}>
        <Routes />
      </Router>
      {/* <MenuBar items={items} depthStep={depthStep}depth={depth}expanded={expand}/> */}

    </div>
  )
}
export default App;