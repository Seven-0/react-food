import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducerLogin } from '../store/reducer';
import { reducerHomepageBanner } from '../store/reducerHomeBanner';

const rootReducer = combineReducers({
    reducerLogin,
    reducerHomepageBanner,
});

export const store = createStore(
    rootReducer, applyMiddleware(thunk)
);
