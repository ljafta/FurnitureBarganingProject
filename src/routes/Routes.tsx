import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import PersistentDrawerLeft from '../components/swap';
import EnhancedTable from '../components/load';

const Routes = () => {
    return(
        <Switch>
            <Redirect exact path="/" to="/home"/>     
            <Route exact path={["/home"]} component={PersistentDrawerLeft}/>
            <Route exact path={["/load"]} component={EnhancedTable}/>
        </Switch>      
    )
}

export default Routes;


