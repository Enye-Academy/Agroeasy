import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import app from '../../app';
import home from '../../home';
import NoMatch from './NoMatch';
import userProfile from '../../userProfile';
import aboutUs from '../../aboutUs';
import producerItems from '../../producerItems';
import { PATHS } from '../constants';

const { HOME, MARKET, PRODUCT_ITEMS, PROFILE, WHO_WE_ARE } = PATHS;
const { App } = app.components;

const Routes = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route path={HOME} exact strict component={home.components.Home} />
                <Route path={MARKET} exact strict component={home.components.Home} />
                <Route path={PROFILE} exact strict component={userProfile.components.UserProfile} />
                <Route
                    path={PRODUCT_ITEMS}
                    exact
                    strict
                    component={producerItems.components.ProducerItems}
                />
                <Route path={WHO_WE_ARE} exact strict component={aboutUs.components.AboutUs} />
                <Route component={NoMatch} />
            </Switch>
        </App>
    </BrowserRouter>
);

export default Routes;
