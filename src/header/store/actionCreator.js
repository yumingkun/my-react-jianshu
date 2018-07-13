import * as actionTypes from './actionTypes';
import axios from 'axios';//Axios 是一个基于 promise 的 HTTP 库

import {fromJS} from 'immutable'

//封装的action，
export const searchFocus=()=>({
    type:actionTypes.SEARCH_FOCUS,
});

export const  searchBlur=()=>({
   type:actionTypes.SEARCH_BLUR,
});

export const mouseEnter=()=>({
    type:actionTypes.MOUSE_ENTER,
});
export const mouseLeave=()=>({
    type:actionTypes.MOUSE_LEAVE,
});

//换一换
export const changePage=(page)=>({
    type:actionTypes.CHANGE_PAGE,
    page:page,
});

const changeLit=(data)=>({//内部调用不必暴露出去
   type:actionTypes.CHANGE_LIST,
   data:fromJS(data),
   totalPage:Math.ceil(data.length/10),
});



//使用thunk中间件之后，action可以返回一个对象,这个对象执行完之后，转发给store
export const getList=()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json')//需要后端的数据
            .then((res)=>{
                const data = res.data;
                dispatch(changeLit(data.data));
            })
            .catch((error)=>(
                console.log(error)
            ));
    }
};