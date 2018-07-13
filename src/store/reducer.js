// import {combineReducers} from 'redux';
import {combineReducers} from 'redux-immutable'
import HeaderReducer from '../header/store/reducer';

//把大的reducer拆分成若干小reducer

//把若干小reducer合并
const reducer=combineReducers({
    header:HeaderReducer,
});

export  default  reducer;