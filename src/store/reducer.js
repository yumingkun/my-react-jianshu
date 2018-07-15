// import {combineReducers} from 'redux';
import {combineReducers} from 'redux-immutable'
import HeaderReducer from '../header/store/reducer';

import HomeReducer from '../pages/home/store/reducer';
import DetailReducer from '../pages/detail/store/reducer';
import LoginReducer from '../pages/login/store/reducer';

//把大的reducer拆分成若干小reducer

//把若干小reducer合并
const reducer=combineReducers({
    header:HeaderReducer,
    home:HomeReducer,
    detail:DetailReducer,
    login:LoginReducer,
});

export  default  reducer;