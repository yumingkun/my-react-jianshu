import * as actionTypes from './actionTypes';//引入自定义常量

import {fromJS} from 'immutable';//引用组件：作用，防止reducer更改state

const  initState=fromJS({//把该对象变成不可更改对象
        focused:false,
        list:[],//换一批的数据列表//此时list也是一个immutabled（不可修改）对象，
        page:1,
        totalPage:1,
        mouseIn:false,//鼠标移动到

})
;

export default (state=initState,action)=>{

    switch (action.type){
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused',true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused',false);
        case actionTypes.CHANGE_LIST:
            return state.set('list',action.data).set('totalPage',action.totalPage);//要确保action.data也是一个immutable对象
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }

}