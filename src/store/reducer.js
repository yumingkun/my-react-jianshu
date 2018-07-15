// import {combineReducers} from 'redux';
import {combineReducers} from 'redux-immutable'
import HeaderReducer from '../header/store/reducer';

import HomeReducer from '../pages/Home/store/reducer';
import DetailRducer from '../pages/detail/store/reducer';

//把大的reducer拆分成若干小reducer

//把若干小reducer合并
const reducer=combineReducers({
    header:HeaderReducer,
    home:HomeReducer,
    detail:DetailRducer,
});

export  default  reducer;