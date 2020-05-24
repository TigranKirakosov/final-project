import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routesConstants from './routing.constants';
import { userSelector } from 'State/redux/user/user.selectors';
import { connect } from 'react-redux';
import { RootState } from 'State/redux/store';

export interface RouteConfig {
    path: string;
    key: string;
    exact?: boolean;
    isProtected?: boolean;
    component: React.ComponentClass<any, any> | React.FC<any>;
    routes?: RouteConfig[];
}

interface IRouteWithSubRoutes extends RouteConfig {
    user: any;
}

const RouteWithSubRoutes: React.FC<IRouteWithSubRoutes> = ({
    user,
    isProtected,
    path,
    exact,
    component: Component,
    routes
}): JSX.Element => {
    if (isProtected && !user.userId) {
        return <Redirect to={routesConstants.SIGN_IN_AND_SIGN_UP} />;
    }

    return (
        <Route
            path={path}
            exact={exact}
            render={props => <Component {...props} routes={routes} />}
        />);
};

const mapState = (state: RootState) => ({
    user: userSelector(state)
});

export const RouteWithSubRoutesHOC = connect(mapState)(RouteWithSubRoutes);

const NoMatch = () => (
    <div className='no-match-page'>The page doesn't exist</div>
  );

export const RenderRoutes = ({ routes }): JSX.Element => (
    <Switch>
        {routes.map((_route: RouteConfig) => (
            <RouteWithSubRoutesHOC key={_route.key} {..._route} />
        ))}
        <Route component={NoMatch} />
    </Switch>
);
