import {createStore,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';//这个中间件，可以使actio返回一个对象

import reducer from "./reducer";

const store=createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
    );

export default store;


