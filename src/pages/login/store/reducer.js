
import {fromJS} from 'immutable';//引用组件：作用，防止reducer更改state

import * as actionTypes from './actionTypes';

const  initState=fromJS({//把该对象变成不可更改对象
        login:false,
    })
;

export default (state=initState,action)=>{

    switch (action.type){
        case actionTypes.CHANGE_LOGIN:
        return state.set('login',action.value);
        case actionTypes.LOGINOUT:
            return state.set('login',action.value);
        default:
            return state;
    }

}