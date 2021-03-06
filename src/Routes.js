import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./views/pages/Home";
import Search from "./views/pages/Search";
import Topic from "./views/pages/Topic";
import Photo from "./views/pages/Photo";
import User from "./views/pages/User";
import Collection from "./views/pages/Collection";

const Routes = () => {

    return (
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/search/:category/:query'} component={Search}/>
            <Route exact path={'/photos/:id'} component={Photo}/>
            <Route exact path={'/:id'} component={User}/>
            <Route exact path={'/topics/:slug'} component={Topic}/>
            <Route exact path={'/collections/:id/:slug'} component={Collection}/>
        </Switch>
    )
}

export default Routes;