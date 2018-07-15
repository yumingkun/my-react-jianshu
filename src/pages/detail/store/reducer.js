
import {fromJS} from 'immutable';//引用组件：作用，防止reducer更改state

import * as actionTypes from './actionTypes'

const  initState=fromJS({//把该对象变成不可更改对象
        title:"",
        content:"",

    })
;

export default (state=initState,action)=>{

    switch (action.type){
        case actionTypes.CHANGE_DETAIL_DATA:
            return state.merge({
               title:action.title,
               content:action.content,
            });
        default:
            return state;
    }

}