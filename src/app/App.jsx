import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from 'Common/components/navbar/navbar.hoc';
import HomePage from 'View/pages/homepage/homepage.component';
import PokemonPage from 'View/pages/pokemon-page/pokemon-page.hoc';
import FreePokemonsPage from 'View/pages/pokemons-page/free-pokemons-page.hoc';
import CapturedPokemonsPage from 'View/pages/pokemons-page/captured-pokemons-page.hoc';
import RandomPokemonPage from 'View/pages/random-page/random-page.hoc';
import SignInAndSignUpPage from 'View/pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';

import routesConstants from 'State/routing/routes.constants';
import './App.scss';

const App = ({ checkUserSession, userData, isLoadingUser, currentPokemon }) => {
  useEffect(() => {
    checkUserSession();
  }, []);

  const renderNoMatch = () => (
    <div className='no-match-page'>The page doesn't exist</div>
  );

  return (
    <>
      <Navbar />
      {isLoadingUser ? (
        <h1 style={{ color: 'wheat', fontSize: '6rem' }}>Loading...</h1>
      ) : (
        <Switch>
          <Route exact path={routesConstants.HOMEPAGE}>
            {userData ? (
              <HomePage />
            ) : (
              <Redirect to={routesConstants.SIGN_IN_AND_SIGN_UP} />
            )}
          </Route>
          <Route
            path={`${routesConstants.POKEMON_PAGE}${currentPokemon.photoId}`}
          >
            {userData ? (
              <PokemonPage />
            ) : (
              <Redirect to={routesConstants.SIGN_IN_AND_SIGN_UP} />
            )}
          </Route>
          <Route path={routesConstants.FREE_POKEMONS_PAGE}>
            {userData ? (
              <FreePokemonsPage />
            ) : (
              <Redirect to={routesConstants.SIGN_IN_AND_SIGN_UP} />
            )}
          </Route>
          <Route path={routesConstants.CAPTURED_POKEMONS_PAGE}>
            {userData ? (
              <CapturedPokemonsPage />
            ) : (
              <Redirect to={routesConstants.SIGN_IN_AND_SIGN_UP} />
            )}
          </Route>
          <Route path={routesConstants.RANDOM_POKEMON_PAGE}>
            {userData ? (
              <RandomPokemonPage />
            ) : (
              <Redirect to={routesConstants.SIGN_IN_AND_SIGN_UP} />
            )}
          </Route>
          <Route path={routesConstants.SIGN_IN_AND_SIGN_UP}>
            {userData ? (
              <Redirect to={routesConstants.HOMEPAGE} />
            ) : (
              <SignInAndSignUpPage />
            )}
          </Route>
          <Route component={renderNoMatch} />
        </Switch>
      )}
    </>
  );
};

export default App;
