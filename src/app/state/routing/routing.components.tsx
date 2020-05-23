import React from 'react';
import { Route, Switch } from 'react-router-dom';

export interface RouteConfig {
    path: string;
    key: string;
    exact?: boolean;
    component: React.ComponentClass<any, any> | React.FC<any>;
    routes?: RouteConfig[];
}

export const RouteWithSubRoutes = (route: RouteConfig): JSX.Element => (
    <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} routes={route.routes} />}
    />
);

const NoMatch = () => (
    <div className='no-match-page'>The page doesn't exist</div>
  );

export const RenderRoutes = ({ routes }): JSX.Element => (
    <Switch>
        {routes.map((_route: RouteConfig) => (
            <RouteWithSubRoutes key={_route.key} {..._route} />
        ))}
        <Route component={NoMatch} />
    </Switch>
);
