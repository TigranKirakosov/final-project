import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'State/redux/root-reducer';
import rootSaga from 'State/redux/root-saga';
import { useDispatch } from 'react-redux';
import { pokemonsMiddleware } from './pokemons/pokemons.middleware';
import { actionSplitterMiddleware } from './core-middleware/actionSplitter.middleware';

const sagaMiddleware = createSagaMiddleware();

const featureMiddlewares = [pokemonsMiddleware] as const;

const coreMiddlewares = [actionSplitterMiddleware, sagaMiddleware] as const;

const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...featureMiddlewares, ...coreMiddlewares))
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

sagaMiddleware.run(rootSaga);

export default store;
