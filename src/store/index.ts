import {createStore, combineReducers} from 'redux';
import {user} from "./reducers/";

const rootReducer = combineReducers({
    user: user,
})

export const store = createStore(
    rootReducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
