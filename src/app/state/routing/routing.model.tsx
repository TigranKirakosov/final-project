import { RouteConfig, RenderRoutes } from './routing.components';
import HomePage from 'App/view/pages/homepage/homepage.component';
import PokemonPage from 'App/view/pages/pokemon-page/pokemon-page.component';
import FreePokemonsPageHOC from 'App/view/pages/pokemons-page/free-pokemons-page.hoc';
import CapturedPokemonsPageHOC from 'App/view/pages/pokemons-page/captured-pokemons-page.hoc';
import RandomPokemonPageHOC from 'App/view/pages/random-page/random-page.hoc';
import SignInAndSignUpPage from 'App/view/pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import routesConstants from './routing.constants';
const {
  HOMEPAGE,
  POKEMON_PAGE,
  FREE_POKEMONS_PAGE,
  CAPTURED_POKEMONS_PAGE,
  RANDOM_POKEMON_PAGE,
  SIGN_IN_AND_SIGN_UP
} = routesConstants;

const ROUTES: RouteConfig[] = [
    {
      path: '/',
      key: 'APP_ROOT',
      component: RenderRoutes,
      routes: [
        {
          path: HOMEPAGE,
          key: 'HOME_PAGE',
          exact: true,
          component: HomePage,
        },
        {
          path: `${POKEMON_PAGE}/:id`,
          key: 'SINGLE_POKEMON_PAGE',
          exact: true,
          component: PokemonPage,
        },
        {
          path: FREE_POKEMONS_PAGE,
          key: 'FREE_POKEMONS_PAGE',
          exact: true,
          component: FreePokemonsPageHOC,
        },
        {
          path: CAPTURED_POKEMONS_PAGE,
          key: 'CAPTURED_POKEMONS_PAGE',
          exact: true,
          component: CapturedPokemonsPageHOC,
        },
        {
          path: RANDOM_POKEMON_PAGE,
          key: 'RANDOM_POKEMON_PAGE',
          exact: true,
          component: RandomPokemonPageHOC,
        },
        {
          path: SIGN_IN_AND_SIGN_UP,
          key: 'SIGN_IN_&_SIGN_UP_PAGE',
          exact: true,
          component: SignInAndSignUpPage
        },
      ],
    },
  ];

export default ROUTES;
