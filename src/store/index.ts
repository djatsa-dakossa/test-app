import { applyMiddleware, createStore, compose, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
import { autoRehydrate } from 'redux-phoenix';


const middlewares = [];



middlewares.push(thunkMiddleware);


const middlewareEnhancer = composeWithDevTools(
  applyMiddleware(...middlewares),
  // @ts-ignore
  autoRehydrate
);

const enhancers = [middlewareEnhancer];
const composedEnhancers = compose(...enhancers);
const store = createStore(
    rootReducer,
    // @ts-ignore
  composedEnhancers
);

export default store;
