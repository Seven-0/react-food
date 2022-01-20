import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer } from './reducer';

const rootReducer = combineReducers({
    reducer: reducer,
});

export const store = createStore(
    rootReducer, applyMiddleware(thunk)
);
